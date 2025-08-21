const axios = require('axios');

async function setupPermissions() {
  try {
    // Создаем публичную роль
    const publicRole = await axios.post('http://localhost:1337/admin/roles', {
      name: 'public',
      description: 'Public role for API access',
      type: 'public'
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_ADMIN_TOKEN',
        'Content-Type': 'application/json'
      }
    });

    console.log('Public role created:', publicRole.data);

    // Настраиваем права для публичной роли
    const permissions = await axios.put('http://localhost:1337/admin/roles/public/permissions', {
      permissions: {
        'api::test.test': {
          controllers: {
            'test': {
              find: { enabled: true, policy: '' },
              findOne: { enabled: true, policy: '' }
            }
          }
        },
        'api::test2.test2': {
          controllers: {
            'test2': {
              find: { enabled: true, policy: '' },
              findOne: { enabled: true, policy: '' }
            }
          }
        },
        'api::order.order': {
          controllers: {
            'order': {
              find: { enabled: true, policy: '' },
              findOne: { enabled: true, policy: '' }
            }
          }
        }
      }
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_ADMIN_TOKEN',
        'Content-Type': 'application/json'
      }
    });

    console.log('Permissions updated:', permissions.data);
  } catch (error) {
    console.error('Error setting up permissions:', error.response?.data || error.message);
  }
}

setupPermissions();

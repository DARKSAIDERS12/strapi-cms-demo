const axios = require('axios');

async function setupPermissions() {
  try {
    const token = 'dcda85af31a9b06608f1876b2e37e8b2dacf190aa6163b826ae99a0007fca98acac12890db8bb6faa506de3603f51d4a40c5092faa17e9323436cfec5bc1fd41';
    
    console.log('🔧 Настройка прав доступа для токена booking-read...');

    // Получаем информацию о content types
    const contentTypes = [
      'api1-station',
      'api2-station', 
      'station-mapping',
      'station-group',
      'order'
    ];

    for (const contentType of contentTypes) {
      console.log(`📝 Настройка прав для ${contentType}...`);
      
      try {
        // Создаем права для find (чтение всех записей)
        const findPermission = await axios.post('http://localhost:1337/admin/content-api/permissions', {
          action: `api::${contentType}.${contentType}.find`,
          token: token
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log(`✅ Право find создано для ${contentType}`);

        // Создаем права для findOne (чтение одной записи)
        const findOnePermission = await axios.post('http://localhost:1337/admin/content-api/permissions', {
          action: `api::${contentType}.${contentType}.findOne`,
          token: token
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log(`✅ Право findOne создано для ${contentType}`);

        // Создаем права для create (создание записей)
        const createPermission = await axios.post('http://localhost:1337/admin/content-api/permissions', {
          action: `api::${contentType}.${contentType}.create`,
          token: token
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log(`✅ Право create создано для ${contentType}`);

        // Создаем права для update (обновление записей)
        const updatePermission = await axios.post('http://localhost:1337/admin/content-api/permissions', {
          action: `api::${contentType}.${contentType}.update`,
          token: token
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log(`✅ Право update создано для ${contentType}`);

        // Создаем права для delete (удаление записей)
        const deletePermission = await axios.post('http://localhost:1337/admin/content-api/permissions', {
          action: `api::${contentType}.${contentType}.delete`,
          token: token
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log(`✅ Право delete создано для ${contentType}`);

      } catch (error) {
        console.error(`❌ Ошибка настройки прав для ${contentType}:`, error.response?.data || error.message);
      }
    }

    console.log('🎉 Настройка прав доступа завершена!');

  } catch (error) {
    console.error('❌ Ошибка настройки прав доступа:', error.response?.data || error.message);
  }
}

setupPermissions();



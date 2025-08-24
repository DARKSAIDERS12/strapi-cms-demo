const sqlite3 = require('sqlite3').verbose();
const path = require('path');

async function setupPermissionsDB() {
  const dbPath = path.join(__dirname, '.tmp', 'data.db');
  const db = new sqlite3.Database(dbPath);

  console.log('🔧 Настройка прав доступа для токена booking-read через базу данных...');

  try {
    // Получаем document_id для новых content types
    const contentTypes = [
      { name: 'api1_stations', action: 'api::api1-station.api1-station' },
      { name: 'api2_stations', action: 'api::api2-station.api2-station' },
      { name: 'station_mappings', action: 'api::station-mapping.station-mapping' },
      { name: 'station_groups', action: 'api::station-group.station-group' },
      { name: 'orders', action: 'api::order.order' }
    ];

    for (const contentType of contentTypes) {
      console.log(`📝 Настройка прав для ${contentType.name}...`);
      
      // Получаем document_id из strapi_database_schema
      db.get(
        "SELECT id FROM strapi_database_schema WHERE schema LIKE ?",
        [`%${contentType.name}%`],
        (err, row) => {
          if (err) {
            console.error(`❌ Ошибка получения document_id для ${contentType.name}:`, err);
            return;
          }

          if (row) {
            console.log(`✅ Найден document_id: ${row.id} для ${contentType.name}`);
            
            // Создаем права для find (чтение всех записей)
            const findAction = `${contentType.action}.find`;
            db.run(
              "INSERT INTO strapi_api_token_permissions (document_id, action, created_at, updated_at, published_at) VALUES (?, ?, datetime('now'), datetime('now'), datetime('now'))",
              [row.id, findAction],
              function(err) {
                if (err) {
                  console.error(`❌ Ошибка создания права find для ${contentType.name}:`, err);
                  return;
                }
                
                const permissionId = this.lastID;
                console.log(`✅ Право find создано (ID: ${permissionId}) для ${contentType.name}`);
                
                // Связываем право с токеном
                db.run(
                  "INSERT INTO strapi_api_token_permissions_token_lnk (api_token_permission_id, api_token_id, api_token_permission_ord) VALUES (?, 3, 1.0)",
                  [permissionId],
                  (err) => {
                    if (err) {
                      console.error(`❌ Ошибка связывания права find для ${contentType.name}:`, err);
                    } else {
                      console.log(`✅ Право find связано с токеном для ${contentType.name}`);
                    }
                  }
                );
              }
            );

            // Создаем права для findOne (чтение одной записи)
            const findOneAction = `${contentType.action}.findOne`;
            db.run(
              "INSERT INTO strapi_api_token_permissions (document_id, action, created_at, updated_at, published_at) VALUES (?, ?, datetime('now'), datetime('now'), datetime('now'))",
              [row.id, findOneAction],
              function(err) {
                if (err) {
                  console.error(`❌ Ошибка создания права findOne для ${contentType.name}:`, err);
                  return;
                }
                
                const permissionId = this.lastID;
                console.log(`✅ Право findOne создано (ID: ${permissionId}) для ${contentType.name}`);
                
                // Связываем право с токеном
                db.run(
                  "INSERT INTO strapi_api_token_permissions_token_lnk (api_token_permission_id, api_token_id, api_token_permission_ord) VALUES (?, 3, 2.0)",
                  [permissionId],
                  (err) => {
                    if (err) {
                      console.error(`❌ Ошибка связывания права findOne для ${contentType.name}:`, err);
                    } else {
                      console.log(`✅ Право findOne связано с токеном для ${contentType.name}`);
                    }
                  }
                );
              }
            );

            // Создаем права для create (создание записей)
            const createAction = `${contentType.action}.create`;
            db.run(
              "INSERT INTO strapi_api_token_permissions (document_id, action, created_at, updated_at, published_at) VALUES (?, ?, datetime('now'), datetime('now'), datetime('now'))",
              [row.id, createAction],
              function(err) {
                if (err) {
                  console.error(`❌ Ошибка создания права create для ${contentType.name}:`, err);
                  return;
                }
                
                const permissionId = this.lastID;
                console.log(`✅ Право create создано (ID: ${permissionId}) для ${contentType.name}`);
                
                // Связываем право с токеном
                db.run(
                  "INSERT INTO strapi_api_token_permissions_token_lnk (api_token_permission_id, api_token_id, api_token_permission_ord) VALUES (?, 3, 3.0)",
                  [permissionId],
                  (err) => {
                    if (err) {
                      console.error(`❌ Ошибка связывания права create для ${contentType.name}:`, err);
                    } else {
                      console.log(`✅ Право create связано с токеном для ${contentType.name}`);
                    }
                  }
                );
              }
            );

            // Создаем права для update (обновление записей)
            const updateAction = `${contentType.action}.update`;
            db.run(
              "INSERT INTO strapi_api_token_permissions (document_id, action, created_at, updated_at, published_at) VALUES (?, ?, datetime('now'), datetime('now'), datetime('now'))",
              [row.id, updateAction],
              function(err) {
                if (err) {
                  console.error(`❌ Ошибка создания права update для ${contentType.name}:`, err);
                  return;
                }
                
                const permissionId = this.lastID;
                console.log(`✅ Право update создано (ID: ${permissionId}) для ${contentType.name}`);
                
                // Связываем право с токеном
                db.run(
                  "INSERT INTO strapi_api_token_permissions_token_lnk (api_token_permission_id, api_token_id, api_token_permission_ord) VALUES (?, 3, 4.0)",
                  [permissionId],
                  (err) => {
                    if (err) {
                      console.error(`❌ Ошибка связывания права update для ${contentType.name}:`, err);
                    } else {
                      console.log(`✅ Право update связано с токеном для ${contentType.name}`);
                    }
                  }
                );
              }
            );

            // Создаем права для delete (удаление записей)
            const deleteAction = `${contentType.action}.delete`;
            db.run(
              "INSERT INTO strapi_api_token_permissions (document_id, action, created_at, updated_at, published_at) VALUES (?, ?, datetime('now'), datetime('now'), datetime('now'))",
              [row.id, deleteAction],
              function(err) {
                if (err) {
                  console.error(`❌ Ошибка создания права delete для ${contentType.name}:`, err);
                  return;
                }
                
                const permissionId = this.lastID;
                console.log(`✅ Право delete создано (ID: ${permissionId}) для ${contentType.name}`);
                
                // Связываем право с токеном
                db.run(
                  "INSERT INTO strapi_api_token_permissions_token_lnk (api_token_permission_id, api_token_id, api_token_permission_ord) VALUES (?, 3, 5.0)",
                  [permissionId],
                  (err) => {
                    if (err) {
                      console.error(`❌ Ошибка связывания права delete для ${contentType.name}:`, err);
                    } else {
                      console.log(`✅ Право delete связано с токеном для ${contentType.name}`);
                    }
                  }
                );
              }
            );

          } else {
            console.log(`⚠️ Document ID не найден для ${contentType.name}`);
          }
        }
      );
    }

    console.log('🎉 Настройка прав доступа завершена!');

  } catch (error) {
    console.error('❌ Ошибка настройки прав доступа:', error);
  } finally {
    // Закрываем соединение с базой данных
    db.close((err) => {
      if (err) {
        console.error('❌ Ошибка закрытия базы данных:', err);
      } else {
        console.log('✅ Соединение с базой данных закрыто');
      }
    });
  }
}

setupPermissionsDB();

migrate((db) => {
  const collection = new Collection({
    "id": "emyvmbe0uysqjsg",
    "created": "2023-01-02 09:56:40.449Z",
    "updated": "2023-01-02 09:56:40.449Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tztpmnov",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("emyvmbe0uysqjsg");

  return dao.deleteCollection(collection);
})

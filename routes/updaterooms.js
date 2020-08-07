var express = require('express');
var kaltura = require('kaltura-client');
var router = express.Router();

/* GET redirect back to register page if user gets here without registering */
router.post('/', function(req, res, next) {
  const config = new kaltura.Configuration();
  config.serviceUrl = req.app.get('kserviceUrl');
  const client = new kaltura.Client(config);
  const apiSecret = req.app.get('kapiSecret');
  const partnerId = req.app.get('kpartnerId'); 
  const expiry = req.app.get('ksessionDuration');
  const userId = req.app.get('kuserId');
  const type = kaltura.enums.SessionType.USER;

  // Generate KS
  kaltura.services.session.start(
    apiSecret,
    userId,
    type,
    partnerId)
  .completion((success, ks) => {
    if (!success) throw new Error(ks.message);
    client.setKs(ks);

    var scheduleResource = new kaltura.objects.LocationScheduleResource();
    var val = JSON.parse(req.body.value);
    var arrayLength = val.updatedRooms.length;
    var numUpdatedRooms = 0;

    // Update the rooms
    for (var i = 0; i < arrayLength; i++) {
      console.log(val.updatedRooms[i]);
      scheduleResource.name = val.updatedRooms[i].name;
      scheduleResource.description = val.updatedRooms[i].description;
      scheduleResource.tags = val.updatedRooms[i].tags;

      kaltura.services.scheduleResource.update(val.updatedRooms[i].id, scheduleResource)
      .execute(client)
      .then(result => {
        console.log(result);

        // Send response after all rooms have completed updating
        if (++numUpdatedRooms === arrayLength) {
          res.end();
        }
      });
    }
  })
  .execute(client);
});

module.exports = router;
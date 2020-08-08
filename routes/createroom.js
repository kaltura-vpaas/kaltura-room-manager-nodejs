var express = require('express');
var kaltura = require('kaltura-client');
var router = express.Router();

router.post('/', function(req, res, next) {
  const config = new kaltura.Configuration();
  config.serviceUrl = req.app.get('kserviceUrl');
  const client = new kaltura.Client(config);
  const apiSecret = req.app.get('kapiSecret');
  const partnerId = req.app.get('kpartnerId'); 
  const expiry = req.app.get('ksessionDuration');
  const userId = req.app.get('kuserId');
  const type = kaltura.enums.SessionType.ADMIN;

  // Generate KS
  kaltura.services.session.start(
    apiSecret,
    userId,
    type,
    partnerId)
  .completion((success, ks) => {
    if (!success) throw new Error(ks.message);
    client.setKs(ks);

    // Create the room
    let scheduleResource = new kaltura.objects.LocationScheduleResource();
    scheduleResource.name = req.body.name;
    scheduleResource.description = req.body.description;
    scheduleResource.tags = req.body.tags;

    kaltura.services.scheduleResource.add(scheduleResource)
    .execute(client)
    .then(result => {
      console.log(result);
      res.redirect('/');
    });
  })
  .execute(client);
});

module.exports = router;
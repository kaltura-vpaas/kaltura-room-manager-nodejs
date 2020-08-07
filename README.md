# Kaltura Room Manager Sample

This shows how to create an interface to manage Kaltura Meetings rooms in a Node.js application.
This is a very basic node express based app (generated using [Express Generator](https://expressjs.com/en/starter/generator.html)).

[![Watch the Kaltura Meetings Developer Guide](https://cfvod.kaltura.com/p/2357341/sp/235734100/thumbnail/entry_id/1_un6d28q7/width/500/vid_sec/30/quality/100 "Watch the Kaltura Meetings Developer Guide")](https://pitch.kaltura-pitch.com/message/b68f06feaf6245816ec0c14f770ba97589c8f0c2a70d4cd038f2b2b94ed4)

## To run
1. Checkout/Download the files
1. `npm install`
1. Copy `config.template.json` to `config.json`
1. Open `config.json`, configure according to the instructions and remove all comments
1. Run:
   * On Mac/Linux - `DEBUG=kalturaroommanager:* npm start`
   * Windows - `set DEBUG=myapp:* & npm start`
1. Load http://localhost:3000/ in your browser to access the app.

## How this code works?
* express is configured with two routes: index and updaterooms
* index (/) - the homepage shows a table of existing rooms (resources) and some of their attributes including room name, description and tags.
* updaterooms updates the rooms that were checked in the table

## Where to get help
* Join the [Kaltura Community Forums](https://forum.kaltura.org/) to ask questions or start discussions
* Read the [Code of conduct](https://forum.kaltura.org/faq) and be patient and respectful

## Get in touch
You can learn more about Kaltura and start a free trial at: http://corp.kaltura.com    
Contact us via Twitter [@Kaltura](https://twitter.com/Kaltura) or email: community@kaltura.com  
We'd love to hear from you!

## License and Copyright Information
All code in this project is released under the [AGPLv3 license](http://www.gnu.org/licenses/agpl-3.0.html) unless a different license for a particular library is specified in the applicable library path.   

Copyright © Kaltura Inc. All rights reserved.

### Open Source Libraries
Review the [list of Open Source 3rd party libraries](open-source-libraries.md) used in this project.

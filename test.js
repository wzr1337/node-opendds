var opendds_addon = require('./build/Debug/node_opendds'),

factory = opendds_addon.initialize('-DCPSConfigFile', 'foo.ini'),

participant = factory.create_participant(32), reader;

try {

    reader = participant.subscribe('topic', 'TOPIC_BUILT_IN_TOPIC_TYPE',
                                   function (dr, sinfo, sample) {
                                       console.log('Received callback');
                                   });
} catch (e) {
    console.log(e);
}

opendds_addon.finalize(factory);

// data for all stimuli in the form of a list of JavaScript objects

var all_stims =


  [{
    "ItemType": "hairsalon",

    "neutralNoCG_DA_context": "Esmeralda es una estilista en un salón de belleza. Esmeralda recibe a una cliente. La cliente es Lina, quien hizo una cita por teléfono. Esta es la primera vez que Lina visita este salón de belleza. Cuando Lina llega a su cita, Esmeralda va con la estilista encargada y le dice:",
    "neutralNoCG_DA_target_sentence": '"La Lina está aquí."',

    "neutralCG_DA_context": "Esmeralda es una estilista en un salón de belleza. Esmeralda recibe a una cliente. La cliente es Lina, quien hizo una cita por teléfono. Lina ha visitado este salón de belleza muchas veces. Cuando Lina llega a su cita, Esmeralda va con la estilista encargada y le dice:",
    "neutralCG_DA_target_sentence": '"La Lina está aquí."',

    "positive_DA_context": "Esmeralda es una estilista en un salón de belleza. Esmeralda recibe a una cliente. La cliente es Lina, quien hizo una cita por teléfono. Lina ha visitado este salón de belleza muchas veces y es amiga de las estilistas. Cuando Lina llega a su cita, Esmeralda va con la estilista encargada y le dice:",
    "positive_DA_target_sentence": '"La Lina está aquí."',

    "negative_DA_context": "Esmeralda es una estilista en un salón de belleza. Esmeralda recibe a una cliente. La cliente es Lina, quien hizo una cita por teléfono. Lina ha visitado este salón de belleza muchas veces y tiene una mala reputación entre las estilistas. Cuando Lina llega a su cita, Esmeralda va con la estilista encargada y le dice:",
    "negative_DA_target_sentence": '"La Lina está aquí."',

    "neutralNoCG_noDA_context": "Esmeralda es una estilista en un salón de belleza. Esmeralda recibe a una cliente. La cliente es Lina, quien hizo una cita por teléfono. Esta es la primera vez que Lina visita este salón de belleza. Cuando Lina llega a su cita, Esmeralda va con la estilista encargada y le dice:",
    "neutralNoCG_noDA_target_sentence":'"Lina está aquí."',

    "neutralCG_noDA_context": "Esmeralda es una estilista en un salón de belleza. Esmeralda recibe a una cliente. La cliente es Lina, quien hizo una cita por teléfono. Lina ha visitado este salón de belleza muchas veces. Cuando Lina llega a su cita, Esmeralda va con la estilista encargada y le dice:",
    "neutralCG_noDA_target_sentence": '"Lina está aquí."',

    "positive_noDA_context": "Esmeralda es una estilista en un salón de belleza. Esmeralda recibe a una cliente. La cliente es Lina, quien hizo una cita por teléfono. Lina ha visitado este salón de belleza muchas veces y es amiga de las estilistas. Cuando Lina llega a su cita, Esmeralda va con la estilista encargada y le dice:",
    "positive_noDA_target_sentence": '"Lina está aquí."',

    "negative_noDA_context": "Esmeralda es una estilista en un salón de belleza. Esmeralda recibe a una cliente. La cliente es Lina, quien hizo una cita por teléfono. Lina ha visitado este salón de belleza muchas veces y tiene una mala reputación entre las estilistas. Cuando Lina llega a su cita, Esmeralda va con la estilista encargada y le dice:",
    "negative_noDA_target_sentence": '"Lina está aquí."',

    "SpeakName":"Esmeralda",
    "SpeakGen": "fem",
    "RefName": "Lina",
    "RefGen": "fem",
    "TrialType": "critical",
    },  {
    
    "ItemType": "party",

    "neutralNoCG_DA_context": "Miguel Ángel está en un festival de su colonia. De pronto, se da cuenta que Carmen, una mujer que conoció hace un año, se acerca a la pista de baile y comienza a bailar. Miguel Ángel está platicando con su primo, quien está de visita y no conoce a Carmen. Miguel Ángel voltea con su primo y le dice:",
    "neutralNoCG_DA_target_sentence": '"La Carmen está bailando."',

    "neutralCG_DA_context": "Miguel Ángel está en un festival de su colonia. De pronto, se da cuenta que Carmen, una mujer que conoció hace un año, se acerca a la pista de baile y comienza a bailar. Miguel Ángel está platicando con su primo, quien también conoce a Carmen. Miguel Ángel voltea con su primo y le dice:",
    "neutralCG_DA_target_sentence": '"La Carmen está bailando."',

    "positive_DA_context": "Miguel Ángel está en un festival de su colonia. De pronto, se da cuenta que Carmen, su novia, se acerca a la pista de baile y comienza a bailar. Carmen y Miguel Ángel están muy enamorados y pasan mucho tiempo juntos. Miguel Ángel está platicando con su primo, quien conoce del noviazgo. Miguel Ángel voltea con su primo y le dice:",
    "positive_DA_target_sentence": '"La Carmen está bailando."',

    "negative_DA_context": "Miguel Ángel está en un festival de su colonia. De pronto, se da cuenta que Carmen, su ex-novia, se acerca a la pista de baile y comienza a bailar. Miguel Ángel y Carmen terminaron su relación a causa de peleas interminables. Miguel Ángel está platicando con su primo, quien conoce del noviazgo fallido. Miguel Ángel voltea con su primo y le dice:",
    "negative_DA_target_sentence": '"La Carmen está bailando."',

    "neutralNoCG_noDA_context": "Miguel Ángel está en un festival de su colonia. De pronto, se da cuenta que Carmen, una mujer que conoció hace un año, se acerca a la pista de baile y comienza a bailar. Miguel Ángel está platicando con su primo, quien está de visita y no conoce a Carmen. Miguel Ángel voltea con su primo y le dice:",
    "neutralNoCG_noDA_target_sentence":'"Carmen está bailando."',

    "neutralCG_noDA_context": "Miguel Ángel está en un festival de su colonia. De pronto, se da cuenta que Carmen, una mujer que conoció hace un año, se acerca a la pista de baile y comienza a bailar. Miguel Ángel está platicando con su primo, quien también conoce a Carmen. Miguel Ángel voltea con su primo y le dice:",
    "neutralCG_noDA_target_sentence": '"Carmen está bailando."',

    "positive_noDA_context": "Miguel Ángel está en un festival de su colonia. De pronto, se da cuenta que Carmen, su novia, se acerca a la pista de baile y comienza a bailar. Carmen y Miguel Ángel están muy enamorados y pasan mucho tiempo juntos. Miguel Ángel está platicando con su primo, quien conoce del noviazgo. Miguel Ángel voltea con su primo y le dice:",
    "positive_noDA_target_sentence": '"Carmen está bailando."',

    "negative_noDA_context": "Miguel Ángel está en un festival de su colonia. De pronto, se da cuenta que Carmen, su ex-novia, se acerca a la pista de baile y comienza a bailar. Miguel Ángel y Carmen terminaron su relación a causa de peleas interminables. Miguel Ángel está platicando con su primo, quien conoce del noviazgo fallido. Miguel Ángel voltea con su primo y le dice:",
    "negative_noDA_target_sentence": '"Carmen está bailando."',

    "SpeakName":"Miguel Ángel",
    "SpeakGen": "masc",
    "RefName": "Carmen",
    "RefGen": "fem",
    "TrialType": "critical",
    },   {
    
    "ItemType": "stats",

    "neutralNoCG_DA_context": "David tiene una clase de estadística este semestre. Hoy es el primer día y se da cuenta que Antonio, otro estudiante universitario, también va a llevar el curso. La familia de David no sabe de sus conocidos en la universidad. David le platica a su mamá sobre la clase y le dice:",
    "neutralNoCG_DA_target_sentence": '“El Antonio está en la clase.” ',

    "neutralCG_DA_context": "David tiene una clase de estadística este semestre. Hoy es el primer día y se da cuenta que Antonio, otro estudiante universitario, también va a llevar el curso. La familia de David también conoce a Antonio. David le platica a su mamá sobre la clase y le dice:",
    "neutralCG_DA_target_sentence": '“El Antonio está en la clase.” ',

    "positive_DA_context": "David tiene una clase de estadística este semestre. Hoy es el primer día y se da cuenta que Antonio, otro estudiante universitario, también va a llevar el curso. Antonio es un buen amigo. En cursos previos, Antonio siempre le ha ayudado con las tareas porque las matemáticas no son el fuerte de David. La familia de David también conoce a Antonio. David le platica a su mamá sobre la clase y le dice:",
    "positive_DA_target_sentence": '“El Antonio está en la clase.” ',

    "negative_DA_context": "David tiene una clase de estadística este semestre. Hoy es el primer día y se da cuenta que Antonio, otro estudiante universitario, también va a llevar el curso. En cursos previos, Antonio siempre le ha copiado las tareas a David y nunca le ha dado crédito. Este hecho casi causa que la universidad expulse a David por entregar la misma tarea que Antonio. La familia de David también conoce a Antonio. David le platica a su mamá sobre la clase y le dice:",
    "negative_DA_target_sentence": '“El Antonio está en la clase.” ',

    "neutralNoCG_noDA_context": "David tiene una clase de estadística este semestre. Hoy es el primer día y se da cuenta que Antonio, otro estudiante universitario, también va a llevar el curso. La familia de David no sabe de sus conocidos en la universidad. David le platica a su mamá sobre la clase y le dice:",
    "neutralNoCG_noDA_target_sentence":'“Antonio está en la clase.” ',

    "neutralCG_noDA_context": "David tiene una clase de estadística este semestre. Hoy es el primer día y se da cuenta que Antonio, otro estudiante universitario, también va a llevar el curso. La familia de David también conoce a Antonio. David le platica a su mamá sobre la clase y le dice: ",
    "neutralCG_noDA_target_sentence": '“Antonio está en la clase.” ',

    "positive_noDA_context": "David tiene una clase de estadística este semestre. Hoy es el primer día y se da cuenta que Antonio, otro estudiante universitario, también va a llevar el curso. Antonio es un buen amigo. En cursos previos, Antonio siempre le ha ayudado con las tareas porque las matemáticas no son el fuerte de David. La familia de David también conoce a Antonio. David le platica a su mamá sobre la clase y le dice: ",
    "positive_noDA_target_sentence": '“Antonio está en la clase.” ',

    "negative_noDA_context": "David tiene una clase de estadística este semestre. Hoy es el primer día y se da cuenta que Antonio, otro estudiante universitario, también va a llevar el curso. En cursos previos, Antonio siempre le ha copiado las tareas a David y nunca le ha dado crédito. Este hecho casi causa que la universidad expulse a David por entregar la misma tarea que Antonio. La familia de David también conoce a Antonio. David le platica a su mamá sobre la clase y le dice:",
    "negative_noDA_target_sentence": '“Antonio está en la clase.” ',

    "SpeakName":"David",
    "SpeakGen": "masc",
    "RefName": "Antonio",
    "RefGen": "masc",
    "TrialType": "critical",
    },   {    
    
    "ItemType": "dinner",

    "neutralNoCG_DA_context": "María y su amiga están organizando una cena y necesitan finalizar la lista de invitados. Su amiga le pregunta si los invitados son personas que las dos conocen. María ha invitado a su cuñado, Sebastián. Sin embargo, su amiga no lo conoce. María le responde:",
    "neutralNoCG_DA_target_sentence": '“El Sebastián va a venir.” ',

    "neutralCG_DA_context": "María y su amiga están organizando una cena y necesitan finalizar la lista de invitados. Su amiga le pregunta si los invitados son personas que las dos conocen. María ha invitado a su cuñado, Sebastián, a quien su amiga conoce. María le responde:",
    "neutralCG_DA_target_sentence": '“El Sebastián va a venir.” ',

    "positive_DA_context": "María y su amiga están organizando una cena y necesitan finalizar la lista de invitados. Su amiga le pregunta si los invitados son personas que las dos conocen. María ha invitado a su cuñado, Sebastián. Los tres se han conocido desde niños y son como hermanos. María le responde:",
    "positive_DA_target_sentence": '“El Sebastián va a venir.” ',

    "negative_DA_context": "María y su amiga están organizando una cena y necesitan finalizar la lista de invitados. Su amiga le pregunta si los invitados son personas que las dos conocen. María ha invitado a su cuñado, Sebastián. María y su amiga piensan que Sebastián es una persona muy fastidiosa y arrogante. María le responde:",
    "negative_DA_target_sentence": '“El Sebastián va a venir.” ',

    "neutralNoCG_noDA_context": "María y su amiga están organizando una cena y necesitan finalizar la lista de invitados. Su amiga le pregunta si los invitados son personas que las dos conocen. María ha invitado a su cuñado, Sebastián. Sin embargo, su amiga no lo conoce. María le responde:",
    "neutralNoCG_noDA_target_sentence":'“Sebastián va a venir.” ',

    "neutralCG_noDA_context": "María y su amiga están organizando una cena y necesitan finalizar la lista de invitados. Su amiga le pregunta si los invitados son personas que las dos conocen. María ha invitado a su cuñado, Sebastián, a quien su amiga conoce. María le responde:",
    "neutralCG_noDA_target_sentence": '“Sebastián va a venir.” ',

    "positive_noDA_context": "María y su amiga están organizando una cena y necesitan finalizar la lista de invitados. Su amiga le pregunta si los invitados son personas que las dos conocen. María ha invitado a su cuñado, Sebastián. Los tres se han conocido desde niños y son como hermanos. María le responde:",
    "positive_noDA_target_sentence": '“Sebastián va a venir.” ',

    "negative_noDA_context": "María y su amiga están organizando una cena y necesitan finalizar la lista de invitados. Su amiga le pregunta si los invitados son personas que las dos conocen. María ha invitado a su cuñado, Sebastián. María y su amiga piensan que Sebastián es una persona muy fastidiosa y arrogante. María le responde:",
    "negative_noDA_target_sentence": '“Sebastián va a venir.” ',

    "SpeakName":"María",
    "SpeakGen": "fem",
    "RefName": "Sebastián",
    "RefGen": "masc",
    "TrialType": "critical",
    },   {
    
    "ItemType": "boss",

    "neutralNoCG_DA_context": "Ignacio y su amigo están en bar. Esta es la primera vez que platican sobre sus vidas laborales, ya que los dos trabajan en lugares distintos. Ignacio nunca ha platicado de su jefe, Diego. Su amigo le pregunta a Ignacio si hay alguna novedad con respecto a su trabajo. Ignacio le responde:",
    "neutralNoCG_DA_target_sentence": '“El Diego va a seguir en el mismo puesto.” ',

    "neutralCG_DA_context": "Ignacio y su amigo están en un bar. Usualmente, ellos recurren a este lugar para hablar de sus vidas laborales. Ignacio platica con su amigo sobre su trabajo y su jefe, Diego. Resulta que Diego y su amigo también se conocen. Su amigo sabe que Diego tal vez cambie de trabajo, y por lo tanto, le pregunta a Ignacio si hay alguna novedad. Ignacio le responde:",
    "neutralCG_DA_target_sentence": '“El Diego va a seguir en el mismo puesto.” ',

    "positive_DA_context": "Ignacio y su amigo están en un bar. Usualmente, ellos recurren a este lugar para hablar de sus vidas laborales. Ignacio platica con su amigo sobre su trabajo y su jefe, Diego. Diego es conocido por ser una persona muy simpática y un jefe excepcional. Resulta que Diego y su amigo también se conocen.  Su amigo sabe que Diego tal vez cambie de trabajo, y por lo tanto, le pregunta a Ignacio si hay alguna novedad. Ignacio le responde:",
    "positive_DA_target_sentence": '“El Diego va a seguir en el mismo puesto.” ',

    "negative_DA_context": "Ignacio y su amigo están en un bar. Usualmente, ellos recurren a este lugar para hablar de sus vidas laborales. Ignacio platica con su amigo sobre su trabajo y su jefe, Diego. Diego es un jefe muy exigente y desagradable. Resulta que Diego y su amigo también se conocen. Su amigo sabe que Diego tal vez cambie de trabajo, y por lo tanto, le pregunta a Ignacio si hay alguna novedad. Ignacio le responde:",
    "negative_DA_target_sentence": '“El Diego va a seguir en el mismo puesto.” ',

    "neutralNoCG_noDA_context": "Ignacio y su amigo están en bar. Esta es la primera vez que platican sobre sus vidas laborales, ya que los dos trabajan en lugares distintos. Ignacio nunca ha platicado de su jefe, Diego. Su amigo le pregunta a Ignacio si hay alguna novedad con respecto a su trabajo. Ignacio le responde:",
    "neutralNoCG_noDA_target_sentence":'“Diego va a seguir en el mismo puesto.” ',

    "neutralCG_noDA_context": "Ignacio y su amigo están en un bar. Usualmente, ellos recurren a este lugar para hablar de sus vidas laborales. Ignacio platica con su amigo sobre su trabajo y su jefe, Diego. Resulta que Diego y su amigo también se conocen. Su amigo sabe que Diego tal vez cambie de trabajo, y por lo tanto, le pregunta a Ignacio si hay alguna novedad. Ignacio le responde:",
    "neutralCG_noDA_target_sentence": '“Diego va a seguir en el mismo puesto.” ',

    "positive_noDA_context": "Ignacio y su amigo están en un bar. Usualmente, ellos recurren a este lugar para hablar de sus vidas laborales. Ignacio platica con su amigo sobre su trabajo y su jefe, Diego. Diego es conocido por ser una persona muy simpática y un jefe excepcional. Resulta que Diego y su amigo también se conocen.  Su amigo sabe que Diego tal vez cambie de trabajo, y por lo tanto, le pregunta a Ignacio si hay alguna novedad. Ignacio le responde:",
    "positive_noDA_target_sentence": '“Diego va a seguir en el mismo puesto.” ',

    "negative_noDA_context": "Ignacio y su amigo están en un bar. Usualmente, ellos recurren a este lugar para hablar de sus vidas laborales. Ignacio platica con su amigo sobre su trabajo y su jefe, Diego. Diego es un jefe muy exigente y desagradable. Resulta que Diego y su amigo también se conocen. Su amigo sabe que Diego tal vez cambie de trabajo, y por lo tanto, le pregunta a Ignacio si hay alguna novedad. Ignacio le responde:",
    "negative_noDA_target_sentence": '“Diego va a seguir en el mismo puesto.” ',

    "SpeakName":"Ignacio",
    "SpeakGen": "masc",
    "RefName": "Diego",
    "RefGen": "masc",
    "TrialType": "critical",
    },   {
    
    "ItemType": "soccer",

    "neutralNoCG_DA_context": "Vicente y su hermano están por comenzar un partido de fútbol. Este partido es el debut de su hermano y no conoce mucho sobre la liga. Fernando es uno de los árbitros y el hermano de Vicente no lo conoce. Vicente ve que Fernando está calentando y le dice a su hermano: ",
    "neutralNoCG_DA_target_sentence": '“El Fernando está corriendo.” ',

    "neutralCG_DA_context": "Vicente y su hermano están por comenzar un partido de fútbol. Llevan varios años jugando y saben mucho de la liga. Fernando es uno de los árbitros y los hermanos lo conocen. Vicente ve que Fernando está calentando y le dice a su hermano:",
    "neutralCG_DA_target_sentence": '“El Fernando está corriendo.” ',

    "positive_DA_context": "Vicente y su hermano están por comenzar un partido de fútbol. Llevan varios años jugando y saben mucho de la liga. Fernando es uno de los árbitros y los hermanos lo conocen. Fernando tiene fama de ser muy justo y carismático. Vicente ve que Fernando está calentando y le dice a su hermano:",
    "positive_DA_target_sentence": '“El Fernando está corriendo.” ',

    "negative_DA_context": "Vicente y su hermano están por comenzar un partido de fútbol. Llevan varios años jugando y saben mucho de la liga. Fernando es uno de los árbitros y los hermanos lo conocen. Fernando tiene fama de ser deshonesto y negligente. Vicente ve que Fernando está calentando y le dice a su hermano:",
    "negative_DA_target_sentence": '“El Fernando está corriendo.” ',

    "neutralNoCG_noDA_context": "Vicente y su hermano están por comenzar un partido de fútbol. Este partido es el debut de su hermano y no conoce mucho sobre la liga. Fernando es uno de los árbitros y el hermano de Vicente no lo conoce. Vicente ve que Fernando está calentando y le dice a su hermano: ",
    "neutralNoCG_noDA_target_sentence":'“Fernando está corriendo.” ',

    "neutralCG_noDA_context": "Vicente y su hermano están por comenzar un partido de fútbol. Llevan varios años jugando y saben mucho de la liga. Fernando es uno de los árbitros y los hermanos lo conocen. Vicente ve que Fernando está calentando y le dice a su hermano:",
    "neutralCG_noDA_target_sentence": '“Fernando está corriendo.” ',

    "positive_noDA_context": "Vicente y su hermano están por comenzar un partido de fútbol. Llevan varios años jugando y saben mucho de la liga. Fernando es uno de los árbitros y los hermanos lo conocen. Fernando tiene fama de ser muy justo y carismático. Vicente ve que Fernando está calentando y le dice a su hermano:",
    "positive_noDA_target_sentence": '“Fernando está corriendo.” ',

    "negative_noDA_context": "Vicente y su hermano están por comenzar un partido de fútbol. Llevan varios años jugando y saben mucho de la liga. Fernando es uno de los árbitros y los hermanos lo conocen. Fernando tiene fama de ser deshonesto y negligente. Vicente ve que Fernando está calentando y le dice a su hermano:",
    "negative_noDA_target_sentence": '“Fernando está corriendo.” ',

    "SpeakName":"Vicente",
    "SpeakGen": "masc",
    "RefName": "Fernando",
    "RefGen": "masc",
    "TrialType": "critical",
    },   {
    
    "ItemType": "neighbor",

    "neutralNoCG_DA_context": "Abril y su hermana están cocinando juntas en el apartamento de Abril. Su hermana se da cuenta que les hace falta más harina y le sugiere a Abril que le pida harina a algún vecino. Como su hermana no vive en este apartamento, no conoce a los vecinos, incluyendo a Valeria, una vecina de Abril. Abril le contesta a su hermana:",
    "neutralNoCG_DA_target_sentence": '“La Valeria no está en su apartamento.” ',

    "neutralCG_DA_context": "Abril y su hermana están cocinando juntas en su apartamento. Su hermana se da cuenta que les hace falta más harina y le sugiere a Abril que le pida harina a la vecina, Valeria. Abril le contesta a su hermana:",
    "neutralCG_DA_target_sentence": '“La Valeria no está en su apartamento.” ',

    "positive_DA_context": "Abril y su hermana están cocinando juntas en su apartamento. Su hermana se da cuenta que les hace falta más harina y le sugiere a Abril que le pida harina a la vecina Valeria, quien es una mujer muy servicial, amable, y una muy buena amiga de las dos. Abril le contesta a su hermana:",
    "positive_DA_target_sentence": '“La Valeria no está en su apartamento.” ',

    "negative_DA_context": "Abril y su hermana están cocinando juntas en su apartamento. Su hermana se da cuenta que les hace falta más harina y le sugiere a Abril que le pida harina a la vecina Valeria, quien es una mujer muy antipatica, enojona, y chismosa. Abril le contesta a su hermana:",
    "negative_DA_target_sentence": '“La Valeria no está en su apartamento.” ',

    "neutralNoCG_noDA_context": "Abril y su hermana están cocinando juntas en el apartamento de Abril. Su hermana se da cuenta que les hace falta más harina y le sugiere a Abril que le pida harina a algún vecino. Como su hermana no vive en este apartamento, no conoce a los vecinos, incluyendo a Valeria, una vecina de Abril. Abril le contesta a su hermana:",
    "neutralNoCG_noDA_target_sentence":'“Valeria no está en su apartamento.” ',

    "neutralCG_noDA_context": "Abril y su hermana están cocinando juntas en su apartamento. Su hermana se da cuenta que les hace falta más harina y le sugiere a Abril que le pida harina a la vecina, Valeria. Abril le contesta a su hermana:",
    "neutralCG_noDA_target_sentence": '“Valeria no está en su apartamento.” ',

    "positive_noDA_context": "Abril y su hermana están cocinando juntas en su apartamento. Su hermana se da cuenta que les hace falta más harina y le sugiere a Abril que le pida harina a la vecina Valeria, quien es una mujer muy servicial, amable, y una muy buena amiga de las dos. Abril le contesta a su hermana:",
    "positive_noDA_target_sentence": '“Valeria no está en su apartamento.” ',

    "negative_noDA_context": "Abril y su hermana están cocinando juntas en su apartamento. Su hermana se da cuenta que les hace falta más harina y le sugiere a Abril que le pida harina a la vecina Valeria, quien es una mujer muy antipatica, enojona, y chismosa. Abril le contesta a su hermana:",
    "negative_noDA_target_sentence": '“Valeria no está en su apartamento.” ',

    "SpeakName":"Abril",
    "SpeakGen": "fem",
    "RefName": "Valeria",
    "RefGen": "fem",
    "TrialType": "critical",
    },   {
    
    "ItemType": "electrician",

    "neutralNoCG_DA_context": "Mariana contrató a un electricista para que arregle las luces en su cocina. El electricista se llama Adrián. Esta es la primera vez que trabaja para Mariana. Mariana vive con su hermana. Cuando su hermana llega a la casa, Mariana le avisa:",
    "neutralNoCG_DA_target_sentence": '“El Adrián está en la cocina.” ',

    "neutralCG_DA_context": "Mariana contrató a un electricista para que arregle las luces en su cocina. El electricista se llama Adrián. La casa es vieja y Adrián ha venido muchas veces por problemas eléctricos. Mariana vive con su hermana. Cuando su hermana llega a la casa, Mariana le avisa: ",
    "neutralCG_DA_target_sentence": '“El Adrián está en la cocina.” ',

    "positive_DA_context": "Mariana contrató a un electricista para que arregle las luces en su cocina. El electricista se llama Adrián. Mariana y Adrián se conocen desde niños y él es un buen amigo de la familia. Mariana vive con su hermana. Cuando su hermana llega a la casa, Mariana le avisa: ",
    "positive_DA_target_sentence": '“El Adrián está en la cocina.” ',

    "negative_DA_context": "Mariana contrató a un electricista para que arregle las luces en su cocina. El electricista se llama Adrián. Mariana conoció a Adrián hace años. Aun así, a Mariana no le agrada Adrián. Ella piensa que sus bromas son vulgares y que él es muy presumido. Mariana vive con su hermana. Cuando su hermana llega a la casa, Mariana le avisa:",
    "negative_DA_target_sentence": '“El Adrián está en la cocina.” ',

    "neutralNoCG_noDA_context": "Mariana contrató a un electricista para que arregle las luces en su cocina. El electricista se llama Adrián. Esta es la primera vez que trabaja para Mariana. Mariana vive con su hermana. Cuando su hermana llega a la casa, Mariana le avisa:",
    "neutralNoCG_noDA_target_sentence":'“Adrián está en la cocina.” ',

    "neutralCG_noDA_context": "Mariana contrató a un electricista para que arregle las luces en su cocina. El electricista se llama Adrián. La casa es vieja y Adrián ha venido muchas veces por problemas eléctricos. Mariana vive con su hermana. Cuando su hermana llega a la casa, Mariana le avisa: ",
    "neutralCG_noDA_target_sentence": '“Adrián está en la cocina.” ',

    "positive_noDA_context": "Mariana contrató a un electricista para que arregle las luces en su cocina. El electricista se llama Adrián. Mariana y Adrián se conocen desde niños y él es un buen amigo de la familia. Mariana vive con su hermana. Cuando su hermana llega a la casa, Mariana le avisa: ",
    "positive_noDA_target_sentence": '“Adrián está en la cocina.” ',

    "negative_noDA_context": "Mariana contrató a un electricista para que arregle las luces en su cocina. El electricista se llama Adrián. Mariana conoció a Adrián hace años. Aun así, a Mariana no le agrada Adrián. Ella piensa que sus bromas son vulgares y que él es muy presumido. Mariana vive con su hermana. Cuando su hermana llega a la casa, Mariana le avisa:",
    "negative_noDA_target_sentence": '“Adrián está en la cocina.” ',

    "SpeakName":"Mariana",
    "SpeakGen": "fem",
    "RefName": "Adrián",
    "RefGen": "masc",
    "TrialType": "critical",
    },   {
    
    "ItemType": "colleague",

    "neutralNoCG_DA_context": "Gabriela trabaja para una pequeña empresa de tecnología. Hoy se encuentra entrenando a la nueva recepcionista. Como es su primer día, Gabriela le presenta al resto de sus colegas, menos a Tomás quien esta de vacaciones. Gabriela le dice a la recepcionista: ",
    "neutralNoCG_DA_target_sentence": '“El Tomás va a llegar mañana.” ',

    "neutralCG_DA_context": "Gabriela trabaja para una pequeña empresa de tecnología. Una mañana, Gabriela se encuentra platicando con la recepcionista. La recepcionista le pregunta a Gabriela cuando regresa Tomás de su viaje. Tomás es un compañero de trabajo que está de vacaciones. Gabriela le dice a la recepcionista: ",
    "neutralCG_DA_target_sentence": '“El Tomás va a llegar mañana.” ',

    "positive_DA_context": "Gabriela trabaja para una pequeña empresa de tecnología. Una mañana, Gabriela se encuentra platicando con la recepcionista. La recepcionista le pregunta a Gabriela cuando regresa Tomás de su viaje. Tomás es un colega muy responsable, amable y servicial. Gabriela le dice a la recepcionista: ",
    "positive_DA_target_sentence": '“El Tomás va a llegar mañana.” ',

    "negative_DA_context": "Gabriela trabaja para una pequeña empresa de tecnología. Una mañana, Gabriela se encuentra platicando con la recepcionista. La recepcionista le pregunta a Gabriela cuando regresa Tomás de su viaje. Tomás es un colega muy irresponsable, grosero y descortés. Gabriela le dice a la recepcionista: ",
    "negative_DA_target_sentence": '“El Tomás va a llegar mañana.” ',

    "neutralNoCG_noDA_context": "Gabriela trabaja para una pequeña empresa de tecnología. Hoy se encuentra entrenando a la nueva recepcionista. Como es su primer día, Gabriela le presenta al resto de sus colegas, menos a Tomás quien esta de vacaciones. Gabriela le dice a la recepcionista: ",
    "neutralNoCG_noDA_target_sentence":'“Tomás va a llegar mañana.” ',

    "neutralCG_noDA_context": "Gabriela trabaja para una pequeña empresa de tecnología. Una mañana, Gabriela se encuentra platicando con la recepcionista. La recepcionista le pregunta a Gabriela cuando regresa Tomás de su viaje. Tomás es un compañero de trabajo que está de vacaciones. Gabriela le dice a la recepcionista: ",
    "neutralCG_noDA_target_sentence": '“Tomás va a llegar mañana.” ',

    "positive_noDA_context": "Gabriela trabaja para una pequeña empresa de tecnología. Una mañana, Gabriela se encuentra platicando con la recepcionista. La recepcionista le pregunta a Gabriela cuando regresa Tomás de su viaje. Tomás es un colega muy responsable, amable y servicial. Gabriela le dice a la recepcionista: ",
    "positive_noDA_target_sentence": '“Tomás va a llegar mañana.” ',

    "negative_noDA_context": "Gabriela trabaja para una pequeña empresa de tecnología. Una mañana, Gabriela se encuentra platicando con la recepcionista. La recepcionista le pregunta a Gabriela cuando regresa Tomás de su viaje. Tomás es un colega muy irresponsable, grosero y descortés. Gabriela le dice a la recepcionista: ",
    "negative_noDA_target_sentence": '“Tomás va a llegar mañana.” ',

    "SpeakName":"Gabriela",
    "SpeakGen": "fem",
    "RefName": "Tomás",
    "RefGen": "masc",
    "TrialType": "critical",
    },   {
    
    "ItemType": "school",

    "neutralNoCG_DA_context": "Santiago está en un evento escolar con su hijo y su sobrino. Ellos están esperando a Andrea, la cuñada de Santiago y la madre de su sobrino. Una maestra que no conocen le pregunta a Santiago si los dos niños son sus hijos. Él le clarifica que uno es su sobrino. Santiago le dice:",
    "neutralNoCG_DA_target_sentence": '“La Andrea está por llegar.”',

    "neutralCG_DA_context": "Santiago está en un evento escolar con su hijo y su sobrino. Ellos están esperando a Andrea, la cuñada de Santiago y la madre de su sobrino. Una maestra le pregunta a Santiago si va a venir Andrea. Santiago le dice:",
    "neutralCG_DA_target_sentence": '“La Andrea está por llegar.”',

    "positive_DA_context": "Santiago está en un evento escolar con su hijo y su sobrino. Ellos están esperando a Andrea, la cuñada de Santiago y la madre de su sobrino. Una maestra le pregunta a Santiago si va a venir Andrea. Las familias de Santiago y Andrea son muy unidas y siempre se ayudan entre sí. También asisten a estos eventos juntos porque sus hijos son de la misma edad. Santiago le dice a la maestra:",
    "positive_DA_target_sentence": '“La Andrea está por llegar.”',

    "negative_DA_context": "Santiago está en un evento escolar con su hijo y su sobrino. Ellos están esperando a Andrea, cuñada de Santiago y la madre de su sobrino. Una maestra le pregunta a Santiago si va a venir Andrea. Santiago y Andrea casi no se hablan. Siempre se están quejando uno del otro por cualquier motivo. Solo asisten a estos eventos juntos porque sus hijos son de la misma edad. Santiago le dice a la maestra:",
    "negative_DA_target_sentence": '“La Andrea está por llegar.”',

    "neutralNoCG_noDA_context": "Santiago está en un evento escolar con su hijo y su sobrino. Ellos están esperando a Andrea, la cuñada de Santiago y la madre de su sobrino. Una maestra que no conocen le pregunta a Santiago si los dos niños son sus hijos. Él le clarifica que uno es su sobrino. Santiago le dice:",
    "neutralNoCG_noDA_target_sentence":'“Andrea está por llegar.”',

    "neutralCG_noDA_context": "Santiago está en un evento escolar con su hijo y su sobrino. Ellos están esperando a Andrea, la cuñada de Santiago y la madre de su sobrino. Una maestra le pregunta a Santiago si va a venir Andrea. Santiago le dice:",
    "neutralCG_noDA_target_sentence": '“Andrea está por llegar.”',

    "positive_noDA_context": "Santiago está en un evento escolar con su hijo y su sobrino. Ellos están esperando a Andrea, la cuñada de Santiago y la madre de su sobrino. Una maestra le pregunta a Santiago si va a venir Andrea. Las familias de Santiago y Andrea son muy unidas y siempre se ayudan entre sí. También asisten a estos eventos juntos porque sus hijos son de la misma edad. Santiago le dice a la maestra:",
    "positive_noDA_target_sentence": '“Andrea está por llegar.”',

    "negative_noDA_context": "Santiago está en un evento escolar con su hijo y su sobrino. Ellos están esperando a Andrea, cuñada de Santiago y la madre de su sobrino. Una maestra le pregunta a Santiago si va a venir Andrea. Santiago y Andrea casi no se hablan. Siempre se están quejando uno del otro por cualquier motivo. Solo asisten a estos eventos juntos porque sus hijos son de la misma edad. Santiago le dice a la maestra:",
    "negative_noDA_target_sentence": '“Andrea está por llegar.”',

    "SpeakName":"Santiago",
    "SpeakGen": "masc",
    "RefName": "Andrea",
    "RefGen": "fem",
    "TrialType": "critical",
    },   {

    "ItemType": "supermarket",

    "neutralNoCG_DA_context": "Natalia trabaja de cajera en un supermercado. Natalia tiene la única caja abierta porque la otra empleada, Renata, está en su descanso. Natalia atiende a su amiga, la siguiente cliente en la fila. Es la primera vez que su amiga viene a este supermercado y no conoce a los otros empleados. Como hay muchos clientes en espera, su amiga le pregunta a Natalia si van a abrir la otra caja. Natalia le responde:",
    "neutralNoCG_DA_target_sentence": '“La Renata está en su descanso.”',

    "neutralCG_DA_context": "Natalia trabaja de cajera en un supermercado. Natalia tiene la única caja abierta porque la otra empleada, Renata, está en su descanso. Natalia atiende a su amiga, la siguiente cliente en la fila. Su amiga antes trabajaba en este supermercado y por lo tanto conoce a la otra empleada. Como hay muchos clientes en espera, su amiga le pregunta a Natalia si van a abrir la otra caja. Natalia le responde: ",
    "neutralCG_DA_target_sentence": '“La Renata está en su descanso.”',

    "positive_DA_context": "Natalia trabaja de cajera en un supermercado. Natalia tiene la única caja abierta porque la otra empleada, Renata, está en su descanso. Natalia atiende a su amiga, la siguiente cliente en la fila. Su amiga antes trabajaba en este supermercado y por lo tanto conoce a la otra empleada. Las tres vivieron juntas hace algunos años y han mantenido un amistad muy bonita. Como hay muchos clientes en espera, su amiga le pregunta a Natalia si van a abrir la otra caja. Natalia le responde:",
    "positive_DA_target_sentence": '“La Renata está en su descanso.”',

    "negative_DA_context": "Natalia trabaja de cajera en un supermercado. Natalia tiene la única caja abierta porque la otra empleada, Renata, está en su descanso. Natalia atiende a su amiga, la siguiente cliente en la fila. Su amiga antes trabajaba en este supermercado y por lo tanto conoce a Renata. Natalia y su amiga no tienen una muy buena relación con Renata ya que Renata las metió en muchos problemas cuando trabajaban juntas. Como hay muchos clientes en espera, su amiga le pregunta a Natalia si van a abrir la otra caja. Natalia le responde: ",
    "negative_DA_target_sentence": '“La Renata está en su descanso.”',

    "neutralNoCG_noDA_context": "Natalia trabaja de cajera en un supermercado. Natalia tiene la única caja abierta porque la otra empleada, Renata, está en su descanso. Natalia atiende a su amiga, la siguiente cliente en la fila. Es la primera vez que su amiga viene a este supermercado y no conoce a los otros empleados. Como hay muchos clientes en espera, su amiga le pregunta a Natalia si van a abrir la otra caja. Natalia le responde:",
    "neutralNoCG_noDA_target_sentence":'“Renata está en su descanso.”',

    "neutralCG_noDA_context": "Natalia trabaja de cajera en un supermercado. Natalia tiene la única caja abierta porque la otra empleada, Renata, está en su descanso. Natalia atiende a su amiga, la siguiente cliente en la fila. Su amiga antes trabajaba en este supermercado y por lo tanto conoce a la otra empleada. Como hay muchos clientes en espera, su amiga le pregunta a Natalia si van a abrir la otra caja. Natalia le responde: ",
    "neutralCG_noDA_target_sentence": '“Renata está en su descanso.”',

    "positive_noDA_context": "Natalia trabaja de cajera en un supermercado. Natalia tiene la única caja abierta porque la otra empleada, Renata, está en su descanso. Natalia atiende a su amiga, la siguiente cliente en la fila. Su amiga antes trabajaba en este supermercado y por lo tanto conoce a la otra empleada. Las tres vivieron juntas hace algunos años y han mantenido un amistad muy bonita. Como hay muchos clientes en espera, su amiga le pregunta a Natalia si van a abrir la otra caja. Natalia le responde:",
    "positive_noDA_target_sentence": '“Renata está en su descanso.”',

    "negative_noDA_context": "Natalia trabaja de cajera en un supermercado. Natalia tiene la única caja abierta porque la otra empleada, Renata, está en su descanso. Natalia atiende a su amiga, la siguiente cliente en la fila. Su amiga antes trabajaba en este supermercado y por lo tanto conoce a Renata. Natalia y su amiga no tienen una muy buena relación con Renata ya que Renata las metió en muchos problemas cuando trabajaban juntas. Como hay muchos clientes en espera, su amiga le pregunta a Natalia si van a abrir la otra caja. Natalia le responde: ",
    "negative_noDA_target_sentence": '“Renata está en su descanso.”',

    "SpeakName":"Natalia",
    "SpeakGen": "fem",
    "RefName": "Renata",
    "RefGen": "fem",
    "TrialType": "critical",
    },   {
    
    "ItemType": "photographer",

    "neutralNoCG_DA_context": "Cristian contrató a una fotógrafa llamada Sara para su boda. Nadie mas que los novios conocen a la fotógrafa. Antes de la celebración, Sara prepara su equipo de fotografía en el salón de fiestas. En ese momento, pero en la sala de recepción, el tío de Cristian le pregunta a Cristian si contrató a alguien para tomar fotos. Cristian le responde:",
    "neutralNoCG_DA_target_sentence": '“La Sara está en su carro.” ',

    "neutralCG_DA_context": "Cristian contrató a una fotógrafa llamada Sara para su boda. Sara es una fotógrafa del pueblo donde viven Cristian y su familia, por lo tanto todos en el pueblo la conocen. Antes de la celebración, Sara prepara su equipo de fotografía en el salón de fiestas. En ese momento, pero en la sala de recepción, el tío de Cristian le pregunta a Cristian donde está la fotógrafa. Cristian le responde: ",
    "neutralCG_DA_target_sentence": '“La Sara está en su carro.” ',

    "positive_DA_context": "Cristian contrató a una fotógrafa llamada Sara para su boda. Sara es una fotógrafa del pueblo donde viven Cristian y su familia.  Sara es muy estimada por toda la gente en el pueblo por su carisma y dedicación. Antes de la celebración, Sara prepara su equipo de fotografía en el salón de fiestas. En ese momento, pero en la sala de recepción, el tío de Cristian le pregunta a Cristian donde está la fotógrafa. Cristian le responde:",
    "positive_DA_target_sentence": '“La Sara está en su carro.” ',

    "negative_DA_context": "Cristian contrató a una fotógrafa llamada Sara para su boda. Sara es una fotógrafa del pueblo donde viven Cristian y su familia. Todos saben que Sara es una persona engreída y altanera pero Cristian la contrató por cuestiones de tiempo. Antes de la celebración, Sara prepara su equipo de fotografía en el salón de fiestas. En ese momento, pero en la sala de recepción, el tío de Cristian le pregunta a Cristian donde esta la fotógrafa. Cristian le responde:",
    "negative_DA_target_sentence": '“La Sara está en su carro.” ',

    "neutralNoCG_noDA_context": "Cristian contrató a una fotógrafa llamada Sara para su boda. Nadie mas que los novios conocen a la fotógrafa. Antes de la celebración, Sara prepara su equipo de fotografía en el salón de fiestas. En ese momento, pero en la sala de recepción, el tío de Cristian le pregunta a Cristian si contrató a alguien para tomar fotos. Cristian le responde:",
    "neutralNoCG_noDA_target_sentence":'“Sara está en su carro.” ',

    "neutralCG_noDA_context": "Cristian contrató a una fotógrafa llamada Sara para su boda. Sara es una fotógrafa del pueblo donde viven Cristian y su familia, por lo tanto todos en el pueblo la conocen. Antes de la celebración, Sara prepara su equipo de fotografía en el salón de fiestas. En ese momento, pero en la sala de recepción, el tío de Cristian le pregunta a Cristian donde está la fotógrafa. Cristian le responde: ",
    "neutralCG_noDA_target_sentence": '“Sara está en su carro.” ',

    "positive_noDA_context": "Cristian contrató a una fotógrafa llamada Sara para su boda. Sara es una fotógrafa del pueblo donde viven Cristian y su familia.  Sara es muy estimada por toda la gente en el pueblo por su carisma y dedicación. Antes de la celebración, Sara prepara su equipo de fotografía en el salón de fiestas. En ese momento, pero en la sala de recepción, el tío de Cristian le pregunta a Cristian donde está la fotógrafa. Cristian le responde:",
    "positive_noDA_target_sentence": '“Sara está en su carro.” ',

    "negative_noDA_context": "Cristian contrató a una fotógrafa llamada Sara para su boda. Sara es una fotógrafa del pueblo donde viven Cristian y su familia. Todos saben que Sara es una persona engreída y altanera pero Cristian la contrató por cuestiones de tiempo. Antes de la celebración, Sara prepara su equipo de fotografía en el salón de fiestas. En ese momento, pero en la sala de recepción, el tío de Cristian le pregunta a Cristian donde esta la fotógrafa. Cristian le responde:",
    "negative_noDA_target_sentence": '“Sara está en su carro.” ',

    "SpeakName":"Cristian",
    "SpeakGen": "masc",
    "RefName": "Sara",
    "RefGen": "fem",
    "TrialType": "critical",
    },   {
    
    "ItemType": "plants",

    "filler_context": "Laura está regando sus plantas. Ve que un vendedor ambulante le está tocando la puerta al vecino de enseguida. Ella sabe que su vecino, Armando, se acaba de ir a trabajar. Laura le dice al vendedor: ",
    "filler_target_sentence": '“Don Armando no está en su casa.”',
    "condition": "neutralNoCG",
    "SpeakName":"Laura",
    "SpeakGen": "fem",
    "RefName": "Armando",
    "RefGen": "masc", 
    "TrialType": "filler"
    },  {

    "ItemType": "swimming",

    "filler_context": "Ximena está hojeando una revista en la sala de su mamá. Su mamá le pregunta por qué su hermano no la acompañó a visitarla. Su hermano, Miguel, siempre la acompaña, pero hoy tuvo práctica de natación. Ximena le dice: ",
    "filler_target_sentence": '“Miguelito está nadando.”',
    "condition": "positive",
    "SpeakName":"Ximena",
    "SpeakGen": "fem",
    "RefName": "Miguel",
    "RefGen": "masc", 
    "TrialType": "filler"
    },  {

    "ItemType": "kitchen",

    "filler_context": "Christopher y su compañero de cuarto están limpiando su cocina. Ellos comparten la cocina con Felipe. Felipe dejó un desastre en la cocina y luego se fue sin limpiar, algo que pasa muy seguido con Felipe. Por lo tanto, Christopher y su compañero de cuarto piensan que Lucas es muy desconsiderado y egoísta. El compañero le pregunta a Christopher a donde se fue Felipe. Christopher le contesta:",
    "filler_target_sentence": '“Ese Felipe está en la tienda.”',
    "condition": "negative",
    "SpeakName":"Christopher",
    "SpeakGen": "masc",
    "RefName": "Felipe",
    "RefGen": "masc", 
    "TrialType": "filler"
    },  {

    "ItemType": "sister",

    "filler_context": "Francisco está haciendo una reservación por teléfono en un restaurante. Él quiere mucho a su hermana menor, Karen. Hoy la va a ver por primera vez en más de un año y la quiere invitar a comer a su restaurante favorito. Su mamá escucha a Francisco en el teléfono y cuando él cuelga, ella le pregunta a quién va a invitar a cenar. Francisco le explica:",
    "filler_target_sentence": '“Esta Karen va a llegar hoy.”',
    "condition": "positive",
    "SpeakName":"Francisco",
    "SpeakGen": "masc",
    "RefName": "Karen",
    "RefGen": "fem", 
    "TrialType": "filler",
    },  {
    
    "ItemType": "rent",

    "filler_context": "Montserrat está escribiendo un cheque para la renta de este mes. Montserrat y su amiga le rentan un apartamento a una pareja, llamados Rodrigo y Julia. La amiga de Montserrat le pregunta quien va a recoger la renta. Montserrat le dice:",
    "filler_target_sentence": '“La Sra. Julia va a recoger la renta.”',
    "condition": "neutralCG",
    "SpeakName":"Montserrat",
    "SpeakGen": "fem",
    "RefName": "Julia",
    "RefGen": "fem", 
    "TrialType": "filler",
    },  {
    
    "ItemType": "butcher",

    "filler_context": "Rafael trabaja en una carnicería. Cada lunes, Florencia compra un kilo de carne. Hoy es lunes y otro carnicero le pregunta a Rafael si ya vino Florencia. Rafael le responde: ",
    "filler_target_sentence": '“Doña Florencia está pagando su cuenta.” ',
    "condition": "neutralCG",
    "SpeakName":"Rafael",
    "SpeakGen": "masc",
    "RefName": "Florencia",
    "RefGen": "fem", 
    "TrialType": "filler",
    },  {

    "ItemType": "cellphone",

    "filler_context": "Roberto y su esposa están comiendo en restaurante. Una familia que conocen también está en el mismo restaurante, sentados en otra mesa. Roberto observa que Sofía, la hija de los conocidos, no platica con el resto de su familia. Sofía solo se la pasa en su teléfono. Roberto voltea con su esposa y le dice:",
    "filler_target_sentence": '“Esa Sofía va a seguir en su teléfono.”',
    "condition": "negative",
    "SpeakName":"Roberto",
    "SpeakGen": "masc",
    "RefName": "Sofía",
    "RefGen": "fem", 
    "TrialType": "filler",
    },  {
    
    "ItemType": "seamstress",

    "filler_context": "Alejandra es una costurera y está atendiendo a una cliente nueva. La cliente se da cuenta que olvido un vestido en casa que también necesita ajustes. Ella le pregunta a Alejandra si va a trabajar mañana para así traerle el vestido el siguiente día. Alejandra le responde que no y le dice: ",
    "filler_target_sentence": '“Anita va trabajar mañana.”  ',
    "condition": "neutralNoCG",
    "SpeakName":"Alejandra",
    "SpeakGen": "fem",
    "RefName": "Ana",
    "RefGen": "fem", 
    "TrialType": "filler",
    },  {
    
    "ItemType": "book",

    "filler_context": "Benjamín es un editor de libros. El está revisando un libro que su mejor amigo escribió. Su amigo se llama Mateo. Aunque Mateo no ha terminado el libro, Benjamín piensa que Mateo es un escritor fantástico. En ese momento, un colega le pregunta a Benjamín que está leyendo. El colega también conoce a Mateo, pero no sabe del libro. Benjamín le dice:",
    "filler_target_sentence": '“Este Mateo va a escribir un libro.”',
    "condition": "positive",
    "SpeakName":"Benjamín",
    "SpeakGen": "masc",
    "RefName": "Mateo",
    "RefGen": "masc", 
    "TrialType": "filler",
    },  {
    
    "ItemType": "shoes",

    "filler_context": "Jorge trabaja en una zapatería. Otro empleado le pregunta en donde se encuentra su jefe, Gabriel. Jorge le contesta:",
    "filler_target_sentence": '“El Sr. Gabriel está en su oficina.”',
    "condition": "neutralCG",
    "SpeakName":"Jorge",
    "SpeakGen": "masc",
    "RefName": "Gabriel",
    "RefGen": "masc", 
    "TrialType": "filler",
    },  

    ]
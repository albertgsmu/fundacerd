(() => {
  const translations = {
    'Idioma': ['Language', 'Langue'],
    'Seleccionar idioma': ['Choose language', 'Choisir la langue'],
    'Inicio': ['Home', 'Accueil'], 'Nosotros': ['About us', 'Qui sommes-nous'],
    'Programas': ['Programs', 'Programmes'], 'Talentos': ['Talents', 'Talents'],
    'Territorio': ['Our territory', 'Territoire'], 'Impacto': ['Our impact', 'Impact'],
    'Videos': ['Videos', 'Vidéos'], 'Donar': ['Donate', 'Faire un don'],
    'Contacto': ['Contact', 'Contact'], 'Únete': ['Join us', 'Rejoignez-nous'],
    'Abrir menú': ['Open menu', 'Ouvrir le menu'],
    'Navegación principal': ['Main navigation', 'Navigation principale'],
    'Deporte • Arte • Cultura • Educación': ['Sports • Arts • Culture • Education', 'Sport • Arts • Culture • Éducation'],
    'Formación para la Vida': ['Education for Life', 'Éducation pour la vie'],
    'Cambiamos realidades a partir de estrategias pedagógicas.': ['We change lives through educational strategies.', 'Nous transformons des vies grâce à des stratégies pédagogiques.'],
    'Somos una organización sin ánimo de lucro fundada en 2016. Trabajamos con niños, niñas, adolescentes, mujeres, adultos y personas mayores de Usme para fortalecer sus habilidades sociales, deportivas, comunicativas y artísticas.': ['Founded in 2016, FUNDARCED is a nonprofit organization. We work with children, teens, women, adults, and older people in Usme, strengthening their social, athletic, communication, and artistic skills.', 'Fondée en 2016, FUNDARCED est une organisation à but non lucratif. Nous accompagnons les enfants, les adolescents, les femmes, les adultes et les personnes âgées d’Usme afin de renforcer leurs compétences sociales, sportives, de communication et artistiques.'],
    'Usme': ['Usme', 'Usme'], 'Desde 2016': ['Since 2016', 'Depuis 2016'],
    'Trabajo comunitario': ['Community work', 'Action communautaire'],
    'Conoce nuestros programas': ['Explore our programs', 'Découvrez nos programmes'],
    'Nuestra misión': ['Our mission', 'Notre mission'],
    'Educación con impacto social': ['Education with social impact', 'Une éducation à impact social'],
    'Deporte y recreación para todas las edades': ['Sports and recreation for all ages', 'Sport et loisirs pour tous les âges'],
    'Desarrollo comunitario sostenible': ['Sustainable community development', 'Développement communautaire durable'],
    'año de fundación': ['year founded', 'année de fondation'],
    'áreas de transformación': ['areas of impact', 'domaines d’action'],
    'territorios de acción': ['communities served', 'territoires d’action'],
    'visión de crecimiento': ['our vision for growth', 'notre vision de développement'],
    'Quiénes somos': ['Who we are', 'Qui sommes-nous'],
    'Creemos que la comunidad cambia cuando se fortalece su potencial.': ['We believe communities thrive when their potential is strengthened.', 'Nous croyons que les communautés s’épanouissent lorsque leur potentiel est valorisé.'],
    'Somos comunidad': ['We are community', 'Nous sommes une communauté'],
    'Unidos por la formación para la vida': ['United through education for life', 'Unis par l’éducation pour la vie'],
    'Crecer en equipo': ['Growing together', 'Grandir ensemble'],
    'El deporte también construye comunidad': ['Sports also build community', 'Le sport rassemble aussi les communautés'],
    'Expresar y crear': ['Express and create', 'S’exprimer et créer'],
    'Arte y cultura para encontrarnos': ['Arts and culture bring us together', 'L’art et la culture nous rassemblent'],
    'FUNDARCED significa Fundación Recreativa, Cultural, Educativa y Deportiva. Nacimos para mitigar el riesgo psicosocial y acompañar a las comunidades mediante procesos de formación para la vida y aprovechamiento del tiempo libre.': ['FUNDARCED stands for Recreational, Cultural, Educational and Sports Foundation. We were created to reduce psychosocial risks and support communities through life-skills education and meaningful use of free time.', 'FUNDARCED signifie Fondation récréative, culturelle, éducative et sportive. Nous sommes nés pour réduire les risques psychosociaux et accompagner les communautés grâce à l’éducation à la vie et à des activités enrichissantes pendant le temps libre.'],
    'A través de un equipo interdisciplinario de profesionales y jóvenes en formación, creamos oportunidades para la toma de decisiones, el proyecto de vida, la convivencia y el desarrollo integral.': ['With an interdisciplinary team of professionals and young people in training, we create opportunities to build decision-making skills, life plans, peaceful relationships, and overall well-being.', 'Grâce à une équipe interdisciplinaire de professionnels et de jeunes en formation, nous créons des occasions de développer la prise de décision, le projet de vie, le vivre-ensemble et l’épanouissement personnel.'],
    'Misión': ['Mission', 'Mission'],
    'Fortalecer habilidades para la vida a través del deporte, el arte, la cultura y la educación.': ['To strengthen life skills through sports, arts, culture, and education.', 'Renforcer les compétences de vie grâce au sport, aux arts, à la culture et à l’éducation.'],
    'Visión': ['Vision', 'Vision'],
    'En 2030, desarrollar programas educativos, ambientales, recreodeportivos y culturales de alto impacto.': ['By 2030, develop high-impact educational, environmental, sports, recreation, and cultural programs.', 'D’ici 2030, mettre en place des programmes éducatifs, environnementaux, sportifs, récréatifs et culturels à fort impact.'],
    'Valores': ['Values', 'Valeurs'],
    'Compromiso social, solidaridad, disciplina, creatividad, participación y trabajo colectivo.': ['Social commitment, solidarity, discipline, creativity, participation, and collective action.', 'Engagement social, solidarité, discipline, créativité, participation et action collective.'],
    'Nuestro territorio': ['Our community', 'Notre territoire'],
    'La transformación comienza cerca de la comunidad.': ['Change begins close to home.', 'Le changement commence au cœur de la communauté.'],
    'Estamos ubicados en los barrios altos de la localidad de Usme, en Bogotá, Colombia. También extendemos nuestra invitación y trabajo comunitario a Tocaimita, construyendo procesos cercanos a las realidades de cada población.': ['We are based in the hillside neighborhoods of Usme in Bogotá, Colombia. We also work with the community of Tocaimita, shaping programs around each community’s needs.', 'Nous sommes présents dans les quartiers des hauteurs d’Usme, à Bogotá, en Colombie. Nous menons également des actions à Tocaimita, adaptées aux réalités de chaque communauté.'],
    'Programas que convierten el tiempo libre en oportunidades.': ['Programs that turn free time into opportunity.', 'Des programmes qui transforment le temps libre en occasions de grandir.'],
    'Elige el programa que más te interesa y escríbenos directamente por WhatsApp para recibir información o unirte.': ['Choose the program that interests you and message us on WhatsApp to learn more or get involved.', 'Choisissez le programme qui vous intéresse et écrivez-nous sur WhatsApp pour en savoir plus ou participer.'],
    'Deporte y Formación Integral': ['Sports and Holistic Development', 'Sport et formation intégrale'],
    'El programa de Deporte y Formación Integral promueve el desarrollo de niños, niñas, jóvenes y comunidad a través del fútbol y el futsal. Más allá de la práctica deportiva, Fundarced entiende el deporte como una herramienta de transformación social, fortaleciendo valores, disciplina, hábitos saludables, trabajo en equipo y construcción de proyectos de vida. Nuestra metodología busca generar procesos formativos de calidad que permitan desarrollar el talento, fortalecer las capacidades individuales y colectivas y crear oportunidades de proyección deportiva, educativa y personal.': ['Our Sports and Holistic Development program supports children, young people, and the wider community through soccer and futsal. We use sports as a tool for social change, building values, discipline, healthy habits, teamwork, and life plans. Our quality training develops talent and individual and collective skills, opening paths to athletic, educational, and personal growth.', 'Notre programme Sport et formation intégrale accompagne les enfants, les jeunes et la communauté grâce au football et au futsal. Nous faisons du sport un outil de transformation sociale qui renforce les valeurs, la discipline, les habitudes saines, le travail d’équipe et les projets de vie. Notre approche développe les talents et les capacités individuelles et collectives, tout en ouvrant des perspectives sportives, éducatives et personnelles.'],
    'Gestión y Apoyo Solidario': ['Community Support and Solidarity', 'Soutien communautaire et solidarité'],
    'El programa de Gestión y Apoyo Solidario articula esfuerzos comunitarios, institucionales y privados para acompañar a poblaciones y familias que enfrentan situaciones de vulnerabilidad o emergencia. A través de campañas solidarias, recolección y entrega de mercados, donaciones, gestión de recursos y ayudas humanitarias, Fundarced moviliza redes de cooperación que permiten responder de manera organizada a las necesidades de los territorios. Estas acciones trascienden nuestro entorno inmediato y nos han permitido participar en iniciativas humanitarias en otras regiones del país, reafirmando que la solidaridad y el trabajo colectivo también son herramientas para transformar realidades.': ['Our Community Support and Solidarity program brings together community groups, institutions, and private partners to support families facing hardship or emergencies. Through solidarity campaigns, food drives, donations, fundraising, and humanitarian aid, we organize networks that respond to local needs. Our work has also reached other regions of Colombia, showing how solidarity and collective action can change lives.', 'Notre programme de soutien communautaire et de solidarité rassemble les communautés, les institutions et les partenaires privés pour accompagner les familles en situation de vulnérabilité ou d’urgence. Grâce aux campagnes de solidarité, aux collectes alimentaires, aux dons et à l’aide humanitaire, nous organisons des réseaux qui répondent aux besoins locaux. Nos actions ont également touché d’autres régions de Colombie, preuve que la solidarité et l’action collective peuvent transformer des vies.'],
    'Arte, Cultura e Identidad.': ['Arts, Culture, and Identity', 'Arts, culture et identité'],
    'El programa de Arte, Cultura e Identidad genera espacios de formación, expresión y reconocimiento de nuestras raíces mediante la danza y otras manifestaciones artísticas y culturales. A través de procesos formativos y presentaciones comunitarias, promovemos el rescate y apropiación del folclor, las tradiciones y la diversidad cultural colombiana. Buscamos que niñas, jóvenes y comunidad encuentren en el arte un escenario para fortalecer su identidad, desarrollar habilidades, expresarse libremente y reconocer el patrimonio cultural como parte fundamental de la construcción social.': ['Our Arts, Culture, and Identity program creates spaces for learning, self-expression, and connection with our roots through dance and other art forms. Workshops and community performances celebrate Colombian folklore, traditions, and cultural diversity. We help children, young people, and the wider community strengthen their identity, develop skills, express themselves, and value cultural heritage.', 'Notre programme Arts, culture et identité crée des espaces de formation, d’expression et de valorisation de nos racines par la danse et d’autres formes artistiques et culturelles. Les ateliers et les présentations communautaires célèbrent le folklore, les traditions et la diversité culturelle colombienne. Nous aidons les enfants, les jeunes et la communauté à renforcer leur identité, développer leurs compétences, s’exprimer librement et reconnaître la valeur du patrimoine culturel.'],
    'Acompañamiento Integral a la Persona Mayor': ['Holistic Support for Older Adults', 'Accompagnement intégral des personnes âgées'],
    'El programa de Acompañamiento Integral a la Persona Mayor promueve un envejecimiento activo, participativo y saludable mediante actividad física y recreación. Desarrollamos jornadas divertidas y educativas donde el medio ambiente y las experiencias pedagógicas fortalecen el bienestar físico, emocional y social. Fundarced reconoce a las personas mayores como protagonistas de sus comunidades, valorando sus experiencias, conocimientos y saberes y generando escenarios que mejoran su autonomía, participación, vínculos sociales y calidad de vida.': ['Our Holistic Support for Older Adults program promotes active, healthy participation through physical activity and recreation. Enjoyable learning sessions connect environmental awareness with experiences that support physical, emotional, and social well-being. We value older adults as community leaders and create opportunities that strengthen autonomy, participation, social ties, and quality of life.', 'Notre programme d’accompagnement intégral des personnes âgées favorise un vieillissement actif et sain par l’activité physique et les loisirs. Des rencontres éducatives et conviviales associent environnement et expériences pédagogiques pour soutenir le bien-être physique, émotionnel et social. Nous reconnaissons le rôle essentiel des personnes âgées dans leur communauté et favorisons leur autonomie, leur participation, les liens sociaux et la qualité de vie.'],
    'Literatura y Creación': ['Literature and Creative Writing', 'Littérature et création'],
    'El programa de Literatura y Creación busca acercar a niños, jóvenes, adultos y personas mayores al universo de la palabra, promoviendo la lectura, la escritura y la construcción de narrativas como herramientas de expresión y transformación. Mediante la creación de cuentos, relatos, historias comunitarias, ejercicios de lectura y espacios de creación colectiva, incentivamos la imaginación, el pensamiento crítico y el reconocimiento de las experiencias del territorio. La literatura se convierte así en una oportunidad para preservar la memoria comunitaria y fortalecer el vínculo de las personas con la educación y la cultura.': ['Our Literature and Creative Writing program invites children, young people, adults, and older adults to explore reading, writing, and storytelling as tools for expression and change. Through stories, community histories, reading activities, and shared creative spaces, we encourage imagination, critical thinking, and recognition of local experiences. Literature helps preserve community memory and strengthen connections to education and culture.', 'Notre programme Littérature et création invite les enfants, les jeunes, les adultes et les personnes âgées à explorer la lecture, l’écriture et le récit comme outils d’expression et de transformation. À travers les histoires, les récits communautaires, les activités de lecture et la création collective, nous encourageons l’imagination, l’esprit critique et la reconnaissance des expériences locales. La littérature contribue à préserver la mémoire communautaire et à renforcer les liens avec l’éducation et la culture.'],
    'Educación Ambiental': ['Environmental Education', 'Éducation à l’environnement'],
    'Formamos personas que también aprenden a cuidar el lugar que habitan.': ['We help people learn to care for the places they call home.', 'Nous aidons chacun à apprendre à prendre soin de son milieu de vie.'],
    'La Educación Ambiental es un eje transversal de Fundarced que acompaña nuestros diferentes programas y fortalece el compromiso de niños, niñas, jóvenes, familias y comunidad con el cuidado de su entorno. Entendemos que formar para la vida también significa aprender a relacionarnos responsablemente con el territorio que compartimos; por eso, llevamos la educación ambiental más allá del discurso y la convertimos en experiencias que permiten conocer, recorrer, cuidar y transformar nuestros espacios.': ['Environmental Education is a cross-cutting part of FUNDARCED that supports our programs and strengthens the commitment of children, young people, families, and the wider community to caring for their surroundings. Education for life also means learning to relate responsibly to the place we share. We take environmental education beyond words and turn it into experiences that help people discover, explore, care for, and improve their surroundings.', 'L’éducation à l’environnement est un axe transversal de FUNDARCED qui accompagne nos programmes et renforce l’engagement des enfants, des jeunes, des familles et de la communauté en faveur de leur milieu. Se former pour la vie, c’est aussi apprendre à entretenir une relation responsable avec le territoire que nous partageons. Nous faisons de l’éducation à l’environnement une expérience concrète pour découvrir, parcourir, préserver et transformer nos espaces.'],
    'A través de salidas pedagógicas con enfoque socioambiental, talleres de separación y aprovechamiento de residuos, actividades de reciclaje, jornadas de limpieza y recuperación de zonas verdes y experiencias educativas en contacto con la naturaleza, promovemos una conciencia ambiental construida desde la acción. Estas iniciativas se desarrollan especialmente en los entornos donde tienen presencia nuestros programas, fortaleciendo en la comunidad el sentido de pertenencia y la corresponsabilidad sobre parques, escenarios deportivos, zonas verdes y demás espacios colectivos.': ['Through socio-environmental learning outings, workshops on sorting and reusing waste, recycling activities, clean-up and green-space restoration days, and learning experiences in nature, we build environmental awareness through action. These initiatives take place especially in the communities where our programs operate, strengthening a sense of belonging and shared responsibility for parks, sports facilities, green spaces, and other community areas.', 'Grâce à des sorties pédagogiques socio-environnementales, des ateliers de tri et de valorisation des déchets, des activités de recyclage, des journées de nettoyage et de restauration des espaces verts ainsi que des expériences au contact de la nature, nous développons une conscience environnementale par l’action. Ces initiatives se déroulent notamment dans les quartiers où nos programmes sont présents et renforcent le sentiment d’appartenance ainsi que la responsabilité collective envers les parcs, les installations sportives, les espaces verts et les autres lieux communs.'],
    'Para Fundarced, no basta con llegar a un territorio y desarrollar una actividad: queremos dejar una relación más consciente entre las personas y el lugar que habitan. Por eso vinculamos la dimensión social con la ambiental, entendiendo que el bienestar de una comunidad también depende de la manera en que reconoce, protege y se apropia responsablemente de su entorno. Así, cada recorrido, cada residuo correctamente separado y cada espacio recuperado se convierte en una oportunidad educativa.': ['For FUNDARCED, it is not enough to visit a place and run an activity. We want to build a more thoughtful relationship between people and the place they call home. We connect social and environmental concerns because community well-being also depends on how people recognize, protect, and responsibly care for their surroundings. Every walk, properly sorted item of waste, and restored space becomes a learning opportunity.', 'Pour FUNDARCED, il ne suffit pas de se rendre dans un territoire et d’y organiser une activité : nous voulons renforcer le lien entre les personnes et leur milieu de vie. Nous associons les dimensions sociale et environnementale, car le bien-être d’une communauté dépend aussi de sa capacité à reconnaître, protéger et habiter son environnement de façon responsable. Chaque parcours, chaque déchet trié et chaque espace restauré devient ainsi une occasion d’apprendre.'],
    'Educamos para transformar personas, pero también para aprender juntos a cuidar el territorio que hace posible esa transformación.': ['We educate to transform lives and to learn together to care for the places that make that change possible.', 'Nous formons pour faire grandir les personnes et apprendre ensemble à prendre soin du territoire qui rend cette transformation possible.'],
    'Galería del programa Educación Ambiental': ['Environmental Education program gallery', 'Galerie du programme d’éducation à l’environnement'],
    'me interesa el programa Educación Ambiental.': ['I’m interested in the Environmental Education program.', 'Le programme d’éducation à l’environnement m’intéresse.'],
    'Me interesa este programa': ['I’m interested in this program', 'Ce programme m’intéresse'],
    'Talentos Fundarced: porque hay sueños que, cuando encuentran disciplina, formación y una oportunidad, pueden convertirse en realidad.': ['Talentos Fundarced: with discipline, training, and opportunity, dreams can become reality.', 'Talentos Fundarced : avec de la discipline, de la formation et une chance, les rêves deviennent réalité.'],
    'Selección · Proyección · Alto rendimiento': ['Selection · Development · High performance', 'Sélection · Progression · Haut niveau'],
    'TALENTOS FUNDARCED🏆': ['FUNDARCED TALENTS 🏆', 'TALENTS FUNDARCED 🏆'],
    'Historias que inspiran': ['Stories that inspire', 'Des histoires inspirantes'],
    'PERSONAS · SUEÑOS · CAMINOS': ['PEOPLE · DREAMS · PATHS', 'PERSONNES · RÊVES · PARCOURS'],
    'Cada deportista tiene un camino único. Aquí podrás conocer sus comienzos, aprendizajes y sueños cuando compartamos sus historias.': ['Every athlete has a unique journey. Discover their beginnings, lessons, and dreams as we share their stories.', 'Chaque athlète suit un parcours unique. Découvrez ses débuts, ses apprentissages et ses rêves à travers nos récits.'],
    'Talento que inspira': ['Talent that inspires', 'Un talent inspirant'],
    'Protagonista del grupo': ['A team leader', 'Une figure de l’équipe'],
    'Una historia para llegar más lejos': ['A story that goes further', 'Une histoire pour aller plus loin'],
    'Jugador Destacado': ['Featured player', 'Joueur à l’honneur'],
    'Gran Liderazgo.': ['A natural leader.', 'Un grand leader.'],
    'ARQUERO DESTACADO': ['FEATURED GOALKEEPER', 'GARDIEN À L’HONNEUR'],
    'MVP-Jugadora mas valiosa': ['MVP — Most valuable player', 'MVP — Joueuse la plus précieuse'],
    'DONA AQUÍ': ['DONATE HERE', 'FAITES UN DON'],
    'Ayúdanos a llevar FUNDARCED más lejos.': ['Help FUNDARCED reach further.', 'Aidez FUNDARCED à aller plus loin.'],
    'Tu aporte ayuda a sostener los procesos deportivos, culturales y educativos de nuestra comunidad y a abrir camino en nuevas localidades y ciudades. Con el apoyo de personas como tú, podemos compartir esta experiencia con más niñas, niños, jóvenes y familias, y soñar con llegar también a otros países. Cada aporte suma para que más comunidades encuentren oportunidades para crecer.': ['Your gift sustains sports, cultural, and educational programs in our community and helps us reach new neighborhoods and cities. With your support, we can share this work with more children, young people, and families—and dream of reaching other countries too. Every contribution helps more communities find opportunities to grow.', 'Votre don soutient les activités sportives, culturelles et éducatives de notre communauté et nous aide à rejoindre de nouveaux quartiers et de nouvelles villes. Grâce à votre soutien, nous pouvons partager cette expérience avec davantage d’enfants, de jeunes et de familles, et rêver d’aller aussi dans d’autres pays. Chaque contribution ouvre des possibilités pour grandir.'],
    'Quiero impulsar esta misión': ['Support this mission', 'Soutenir cette mission'],
    'Tu aporte abre nuevos caminos': ['Your gift opens new paths', 'Votre don ouvre de nouvelles voies'],
    'Ayúdanos a llegar más lejos': ['Help us reach further', 'Aidez-nous à aller plus loin'],
    'Escríbenos para conocer cómo donar y ayudarnos a llevar oportunidades, deporte y formación a más comunidades. Te orientaremos sobre los medios disponibles y responderemos tus preguntas.': ['Message us to learn how to donate and help bring opportunity, sports, and learning to more communities. We’ll explain the available options and answer your questions.', 'Écrivez-nous pour savoir comment faire un don et apporter des possibilités, du sport et de la formation à davantage de communautés. Nous vous présenterons les options disponibles et répondrons à vos questions.'],
    'Quiero ayudar a expandir FUNDARCED': ['Help FUNDARCED grow', 'Aider FUNDARCED à grandir'],
    'El talento crece cuando encuentra acompañamiento y oportunidades.': ['Talent grows with support and opportunity.', 'Le talent grandit avec de l’accompagnement et des possibilités.'],
    'A través del deporte, la cultura y la educación, acompañamos procesos que fortalecen la disciplina, la confianza, la toma de decisiones y el proyecto de vida de nuestra comunidad.': ['Through sports, culture, and education, we support journeys that build discipline, confidence, decision-making, and life goals.', 'Grâce au sport, à la culture et à l’éducation, nous accompagnons des parcours qui renforcent la discipline, la confiance, la prise de décision et les projets de vie.'],
    'Habilidades para la vida': ['Life skills', 'Compétences de vie'],
    'Arte, cultura y deporte': ['Arts, culture, and sports', 'Arts, culture et sport'],
    'Proyecto de vida': ['Life plan', 'Projet de vie'],
    'Nuestra comunidad en Instagram': ['Our community on Instagram', 'Notre communauté sur Instagram'],
    'El día a día de FUNDARCED, contado desde el territorio.': ['Everyday life at FUNDARCED, told from our community.', 'Le quotidien de FUNDARCED raconté depuis notre territoire.'],
    'En Instagram compartimos las actividades, historias y momentos de nuestra comunidad. Explora nuestras historias destacadas y acompáñanos en cada proceso.': ['On Instagram, we share our community’s activities, stories, and moments. Explore our highlights and follow each journey.', 'Sur Instagram, nous partageons les activités, les histoires et les moments de notre communauté. Découvrez nos stories à la une et suivez nos projets.'],
    'Síguenos en Instagram': ['Follow us on Instagram', 'Suivez-nous sur Instagram'],
    'Deporte, cultura, lectura y comunidad: conoce de cerca todo lo que hacemos.': ['Sports, culture, reading, and community: get to know our work.', 'Sport, culture, lecture et communauté : découvrez nos actions.'],
    'Visitar perfil': ['Visit profile', 'Voir le profil'],
    'Publicaciones de Instagram': ['Instagram posts', 'Publications Instagram'],
    'Historias reales de nuestra comunidad': ['Real stories from our community', 'Des histoires vraies de notre communauté'],
    'Momentos del proceso deportivo': ['Moments from the athletic journey', 'Moments du parcours sportif'],
    'Deporte · Arte · Cultura · Educación': ['Sports · Arts · Culture · Education', 'Sport · Arts · Culture · Éducation'],
    'Instagram · @fundarced': ['Instagram · @fundarced', 'Instagram · @fundarced'],
    'Aqui encontraras las publicaciones mas destacas y visitar nuestras publicaciones de instagram...': ['Explore our highlights and visit our Instagram posts.', 'Découvrez nos stories à la une et nos publications Instagram.'],
    'Sigue nuestra pagina...': ['Follow our page…', 'Suivez notre page…'],
    'Videos y redes': ['Videos and social media', 'Vidéos et réseaux sociaux'],
    'Síguenos en nuestras redes': ['Follow us on social media', 'Suivez-nous sur les réseaux sociaux'],
    'Conoce nuestra historia directamente desde YouTube.': ['Discover our story on YouTube.', 'Découvrez notre histoire sur YouTube.'],
    'Mira nuestras experiencias, jornadas y acciones comunitarias. Síguenos para acompañar de cerca todo lo que hacemos por la formación para la vida.': ['Watch our experiences, events, and community work. Follow us to see how we support education for life.', 'Découvrez nos expériences, nos événements et nos actions communautaires. Suivez-nous pour voir comment nous faisons vivre l’éducation.'],
    'Ver canal de YouTube': ['Watch our YouTube channel', 'Voir notre chaîne YouTube'],
    'Historias y experiencias de nuestra comunidad': ['Stories and experiences from our community', 'Histoires et expériences de notre communauté'],
    'Experiencias FUNDARCED': ['FUNDARCED experiences', 'Expériences FUNDARCED'],
    'Un vistazo en formato Short': ['A quick look in Shorts', 'Un aperçu en format Short'],
    'Testimonios': ['Testimonials', 'Témoignages'],
    'Tu experiencia también inspira.': ['Your experience can inspire others.', 'Votre expérience peut inspirer.'],
    'Comparte tu experiencia con FUNDARCED y ayuda a otras personas a conocer nuestro trabajo.': ['Share your experience with FUNDARCED and help others learn about our work.', 'Partagez votre expérience avec FUNDARCED et aidez d’autres personnes à découvrir nos actions.'],
    'Tu nombre': ['Your name', 'Votre nom'], '¿Cómo te llamas?': ['What is your name?', 'Comment vous appelez-vous ?'],
    'Tu vínculo con FUNDARCED': ['Your connection to FUNDARCED', 'Votre lien avec FUNDARCED'],
    'Selecciona una opción': ['Choose an option', 'Choisissez une option'],
    'Participante': ['Participant', 'Participant·e'], 'Familiar': ['Family member', 'Membre de la famille'],
    'Voluntario/a': ['Volunteer', 'Bénévole'], 'Entrenador/a': ['Coach', 'Entraîneur·e'],
    'Aliado/a': ['Partner', 'Partenaire'], 'Otro': ['Other', 'Autre'],
    'Tu opinión': ['Your testimonial', 'Votre témoignage'],
    'Cuéntanos qué ha significado FUNDARCED para ti…': ['Tell us what FUNDARCED has meant to you…', 'Racontez-nous ce que FUNDARCED représente pour vous…'],
    'Autorizo que mi nombre, vínculo y opinión se publiquen en la web de FUNDARCED.': ['I authorize FUNDARCED to publish my name, connection, and testimonial on its website.', 'J’autorise FUNDARCED à publier mon nom, mon lien avec l’organisation et mon témoignage sur son site.'],
    'No completar este campo': ['Leave this field blank', 'Ne pas remplir ce champ'],
    'Compartir mi experiencia': ['Share my experience', 'Partager mon témoignage'],
    'Las opiniones se compartirán públicamente en esta sección.': ['Testimonials are shared publicly in this section.', 'Les témoignages sont publiés dans cette section.'],
    'Experiencias de la comunidad': ['Community experiences', 'Témoignages de la communauté'],
    'Cuando alguien comparta su experiencia, aparecerá aquí.': ['Community testimonials will appear here.', 'Les témoignages de la communauté apparaîtront ici.'],
    'Hagamos comunidad con un propósito claro.': ['Let’s build a community with a shared purpose.', 'Construisons une communauté autour d’un objectif commun.'],
    'Tu apoyo ayuda a cubrir escenarios deportivos, transporte para voluntarios y entrenadores, uniformes, materiales deportivos, recreativos y culturales. Súmate como aliado o patrocinador y hagamos parte de esta transformación social.': ['Your support helps cover sports facilities, transportation for volunteers and coaches, uniforms, and sports, recreation, and cultural supplies. Become a partner or sponsor and help drive social change.', 'Votre soutien contribue aux terrains, au transport des bénévoles et des entraîneurs, aux uniformes et au matériel sportif, récréatif et culturel. Devenez partenaire ou commanditaire et participez à cette transformation sociale.'],
    'Nombre': ['Name', 'Nom'], 'Correo': ['Email', 'Courriel'], 'Mensaje': ['Message', 'Message'],
    'Cuéntanos cómo quieres colaborar': ['Tell us how you would like to help', 'Dites-nous comment vous souhaitez contribuer'],
    'Enviar por correo': ['Send by email', 'Envoyer par courriel'], 'Enviar por WhatsApp': ['Send by WhatsApp', 'Envoyer par WhatsApp'],
    'FUNDARCED · Formación para la Vida · Usme, Bogotá': ['FUNDARCED · Education for Life · Usme, Bogotá', 'FUNDARCED · Éducation pour la vie · Usme, Bogotá'],
    'Encuéntranos como': ['Find us as', 'Retrouvez-nous sous'],
    'DONA AQUÍ': ['DONATE HERE', 'FAITES UN DON'],
    'Galería del programa Deporte': ['Sports program gallery', 'Galerie du programme sportif'],
    'Galería del apoyo solidario en Quibdó': ['Solidarity support in Quibdó gallery', 'Galerie de l’aide solidaire à Quibdó'],
    'Galería del programa Arte y cultura': ['Arts and culture program gallery', 'Galerie du programme arts et culture'],
    'Galería del programa Bienestar mayor': ['Older adults’ well-being program gallery', 'Galerie du programme de bien-être des personnes âgées'],
    'Galería del programa Recreación': ['Recreation program gallery', 'Galerie du programme de loisirs'],
    'Galería del programa Talentos FUNDARCED': ['FUNDARCED Talents gallery', 'Galerie Talents FUNDARCED'],
    'Fotos de la comunidad FUNDARCED': ['FUNDARCED community photos', 'Photos de la communauté FUNDARCED'],
    'Imagen anterior': ['Previous image', 'Image précédente'], 'Imagen siguiente': ['Next image', 'Image suivante'],
    'Cerrar galería': ['Close gallery', 'Fermer la galerie'],
    'Escribir a FUNDARCED por WhatsApp': ['Message FUNDARCED on WhatsApp', 'Écrire à FUNDARCED sur WhatsApp'],
    'Cargando FUNDARCED': ['Loading FUNDARCED', 'Chargement de FUNDARCED'],
    'Quiero donar por WhatsApp': ['I want to donate via WhatsApp', 'Je souhaite faire un don par WhatsApp'],
    'Quiero apoyar la misión de llevar la fundación a más localidades y ciudades. ¿Me comparten cómo puedo donar?': ['I would like to help FUNDARCED reach more communities and cities. How can I donate?', 'Je souhaite aider FUNDARCED à rejoindre davantage de communautés et de villes. Comment puis-je faire un don ?'],
    'Quiero ayudar a expandir la fundación y quisiera conocer cómo hacer mi donación.': ['I would like to help FUNDARCED grow. How can I make a donation?', 'Je souhaite aider FUNDARCED à grandir. Comment puis-je faire un don ?'],
    'Completa los campos y autoriza mostrar tu opinión para continuar.': ['Complete the fields and authorize publication to continue.', 'Remplissez les champs et autorisez la publication pour continuer.'],
    'Falta conectar la hoja compartida de testimonios.': ['The shared testimonials sheet still needs to be connected.', 'La feuille partagée des témoignages doit encore être connectée.'],
    'No se pudieron cargar las opiniones. Intenta de nuevo más tarde.': ['Testimonials could not be loaded. Please try again later.', 'Impossible de charger les témoignages. Réessayez plus tard.'],
    'El formulario estará disponible cuando se conecte la hoja compartida.': ['The form will be available once the shared sheet is connected.', 'Le formulaire sera disponible une fois la feuille partagée connectée.'],
    'Enviando tu opinión…': ['Sending your testimonial…', 'Envoi de votre témoignage…'],
    'Gracias. Tu opinión fue enviada; actualizaremos la lista enseguida.': ['Thank you. Your testimonial was sent; the list will update shortly.', 'Merci. Votre témoignage a été envoyé ; la liste sera mise à jour sous peu.'],
    'No se pudo enviar la opinión. Revisa tu conexión e inténtalo de nuevo.': ['Your testimonial could not be sent. Check your connection and try again.', 'Votre témoignage n’a pas pu être envoyé. Vérifiez votre connexion et réessayez.'],
    'FUNDARCED | Formación para la Vida': ['FUNDARCED | Education for Life', 'FUNDARCED | Éducation pour la vie'],
    'FUNDARCED es una organización sin ánimo de lucro que fortalece habilidades para la vida en Usme y Tocaimita a través del deporte, el arte, la cultura y la educación.': ['FUNDARCED is a nonprofit organization in Usme and Tocaimita, Colombia, building life skills through sports, arts, culture, and education.', 'FUNDARCED est une organisation à but non lucratif d’Usme et Tocaimita, en Colombie, qui développe les compétences de vie par le sport, les arts, la culture et l’éducation.'],
    'Tu apoyo llega a una familia': ['Your support reaches a family', 'Votre soutien aide une famille'],
    'Quiénes somos': ['Who we are', 'Qui sommes-nous'],
    'Fotos de la comunidad FUNDARCED': ['FUNDARCED community photos', 'Photos de la communauté FUNDARCED'],
    'Logo de FUNDARCED, Formación para la Vida': ['FUNDARCED logo, Education for Life', 'Logo FUNDARCED, Éducation pour la vie'],
    'Equipo de FUNDARCED reunido junto a su bandera institucional': ['FUNDARCED team gathered with its flag', 'Équipe de FUNDARCED réunie avec son drapeau'],
    'Participantes de FUNDARCED en una actividad deportiva comunitaria': ['FUNDARCED participants at a community sports activity', 'Participants de FUNDARCED lors d’une activité sportive communautaire'],
    'Participantes de FUNDARCED en una actividad artística': ['FUNDARCED participants at an arts activity', 'Participants de FUNDARCED lors d’une activité artistique'],
    'Ilustración de Usme, Bogotá, con el logo de FUNDARCED': ['Illustration of Usme, Bogotá, with the FUNDARCED logo', 'Illustration d’Usme, Bogotá, avec le logo FUNDARCED'],
    'Jóvenes participando en deporte': ['Young people taking part in sports', 'Jeunes participant à une activité sportive'],
    'Participantes en una actividad deportiva de FUNDARCED': ['Participants in a FUNDARCED sports activity', 'Participants à une activité sportive de FUNDARCED'],
    'Jornada deportiva de la comunidad': ['Community sports day', 'Journée sportive communautaire'],
    'Entrenamiento deportivo comunitario': ['Community sports training', 'Entraînement sportif communautaire'],
    'Jóvenes participando en una actividad deportiva': ['Young people taking part in a sports activity', 'Jeunes participant à une activité sportive'],
    'Encuentro deportivo de FUNDARCED': ['FUNDARCED sports event', 'Rencontre sportive de FUNDARCED'],
    'Actividad de fútbol y formación integral': ['Soccer and holistic development activity', 'Activité de football et de formation intégrale'],
    'Participantes de FUNDARCED en la cancha': ['FUNDARCED participants on the field', 'Participants de FUNDARCED sur le terrain'],
    'Apoyo solidario en Quibdó, Colombia': ['Community support in Quibdó, Colombia', 'Aide solidaire à Quibdó, en Colombie'],
    'Familias beneficiarias del apoyo en Quibdó': ['Families receiving support in Quibdó', 'Familles bénéficiaires de l’aide à Quibdó'],
    'Entrega de ayudas en Quibdó': ['Aid distribution in Quibdó', 'Distribution d’aide à Quibdó'],
    'Jornada solidaria de FUNDARCED': ['FUNDARCED solidarity event', 'Journée de solidarité de FUNDARCED'],
    'Voluntariado durante la jornada de apoyo': ['Volunteers during the support event', 'Bénévoles lors de la journée de soutien'],
    'Ayudas organizadas para la comunidad': ['Aid prepared for the community', 'Aide préparée pour la communauté'],
    'Comunidad de Quibdó recibiendo apoyo': ['Quibdó community receiving support', 'Communauté de Quibdó recevant de l’aide'],
    'Entrega comunitaria de donaciones': ['Community donation delivery', 'Distribution de dons à la communauté'],
    'Acompañamiento a familias afectadas': ['Support for affected families', 'Accompagnement des familles touchées'],
    'Actividad física para personas mayores': ['Physical activity for older adults', 'Activité physique pour les personnes âgées'],
    'Encuentro de personas mayores': ['Gathering for older adults', 'Rencontre de personnes âgées'],
    'Recreación para personas mayores': ['Recreation for older adults', 'Loisirs pour les personnes âgées'],
    'Actividad comunitaria para personas mayores': ['Community activity for older adults', 'Activité communautaire pour les personnes âgées'],
    'Ejercicio adaptado para personas mayores': ['Adapted exercise for older adults', 'Exercice adapté aux personnes âgées'],
    'Integración de personas mayores': ['Older adults coming together', 'Rencontre intergénérationnelle'],
    'Actividad de integración para personas mayores': ['Social activity for older adults', 'Activité de convivialité pour les personnes âgées'],
    'Jornada recreativa con personas mayores': ['Recreation day with older adults', 'Journée de loisirs avec les personnes âgées'],
    'Encuentro comunitario de personas mayores': ['Community gathering for older adults', 'Rencontre communautaire de personnes âgées'],
    'Actividad artística de FUNDARCED': ['FUNDARCED arts activity', 'Activité artistique de FUNDARCED'],
    'Expresión cultural comunitaria': ['Community cultural expression', 'Expression culturelle communautaire'],
    'Presentación artística': ['Arts performance', 'Spectacle artistique'],
    'Participantes en actividad cultural': ['Participants at a cultural activity', 'Participants à une activité culturelle'],
    'Encuentro de arte y cultura': ['Arts and culture gathering', 'Rencontre autour des arts et de la culture'],
    'Actividad recreativa de FUNDARCED': ['FUNDARCED recreation activity', 'Activité de loisirs de FUNDARCED'],
    'Participantes en actividad recreativa': ['Participants in a recreation activity', 'Participants à une activité de loisirs'],
    'Recreación para niños y jóvenes': ['Recreation for children and young people', 'Loisirs pour les enfants et les jeunes'],
    'Encuentro recreativo de FUNDARCED': ['FUNDARCED recreation gathering', 'Rencontre récréative de FUNDARCED'],
    'Aprendizaje sobre el deporte y comportamientos en la cancha': ['Learning about sports and fair play', 'Apprendre le sport et le respect sur le terrain'],
    'Galería de imágenes': ['Image gallery', 'Galerie d’images'],
    'Galería del programa Talentos FUNDARCED': ['FUNDARCED Talents gallery', 'Galerie Talents FUNDARCED'],
    'Escríbenos por WhatsApp': ['Message us on WhatsApp', 'Écrivez-nous sur WhatsApp'],
    '¿Hablamos?': ['Let’s talk', 'On en parle ?'],
    'Escríbenos por WhatsApp': ['Message us on WhatsApp', 'Écrivez-nous sur WhatsApp'],
    'El programa de Literatura y Creación': ['Literature and Creative Writing program', 'Programme Littérature et création'],
    'Me interesa este programa': ['I’m interested in this program', 'Ce programme m’intéresse'],
    'Hola FUNDARCED, quiero apoyar la misión de llevar la fundación a más localidades y ciudades. ¿Me comparten cómo puedo donar?': ['Hello FUNDARCED, I would like to support your mission to reach more communities and cities. How can I donate?', 'Bonjour FUNDARCED, je souhaite soutenir votre mission et vous aider à rejoindre davantage de communautés et de villes. Comment faire un don ?'],
    'Hola FUNDARCED, quiero ayudar a expandir la fundación y quisiera conocer cómo hacer mi donación.': ['Hello FUNDARCED, I would like to help the foundation grow. How can I make a donation?', 'Bonjour FUNDARCED, je souhaite aider la fondation à grandir. Comment puis-je faire un don ?'],
    'me interesa el programa Deporte.': ['I am interested in the Sports program.', 'Le programme Sport m’intéresse.'],
    'me interesa el programa Apoyo solidario.': ['I am interested in the Community Support program.', 'Le programme Soutien communautaire m’intéresse.'],
    'me interesa el programa Arte y cultura.': ['I am interested in the Arts and Culture program.', 'Le programme Arts et culture m’intéresse.'],
    'me interesa el programa Bienestar mayor.': ['I am interested in the Older Adults program.', 'Le programme pour les personnes âgées m’intéresse.'],
    'me interesa el programa Recreación.': ['I am interested in the Recreation program.', 'Le programme Loisirs m’intéresse.'],
    'me interesa conocer el programa premium Talentos FUNDARCED.': ['I would like to learn about the Talentos FUNDARCED program.', 'Je souhaite en savoir plus sur le programme Talentos FUNDARCED.'],
    'quiero recibir información.': ['I would like to receive information.', 'Je souhaite recevoir des informations.'],
    'Selección Bogotá Futsal 2026 Hay jugadores que buscan ser protagonistas. Otros hacen protagonista a todo un equipo. Santiago Guzmán es inteligencia, carácter colectivo y liderazgo dentro de la cancha. Su capacidad para interpretar el juego, encontrar espacios, ubicarse y organizar le permite entender el futsal más allá de la acción individual. Es un jugador que conecta, orienta y potencia las capacidades de quienes están a su alrededor; y es precisamente esa capacidad de hacer mejores a sus compañeros la que termina convirtiéndolo en protagonista. Su proceso y participación en la Selección Bogotá de Futsal 2026 representan un nuevo paso dentro de una historia que continúa construyéndose. Santiago representa la esencia de Talentos Fundarced: comprender que crecer como deportista no significa únicamente destacar individualmente, sino aprender a poner tus capacidades al servicio del equipo. Porque el verdadero liderazgo también se demuestra jugando para los demás.': ['Bogotá Futsal Team 2026. Some players seek the spotlight; others help the whole team shine. Santiago Guzmán brings intelligence, teamwork, and leadership to the court. He reads the game, finds space, and helps organize play. His ability to connect with teammates and bring out their strengths makes him a leader. His place on the Bogotá Futsal Team in 2026 marks another step in a journey still unfolding. Santiago reflects the spirit of Talentos Fundarced: growing as an athlete means putting your abilities at the service of the team. True leadership is also shown by playing for others.', 'Sélection de futsal de Bogotá 2026. Certains joueurs cherchent à briller ; d’autres font briller toute l’équipe. Santiago Guzmán apporte intelligence, esprit collectif et leadership sur le terrain. Il sait lire le jeu, trouver les espaces et organiser l’équipe. Sa capacité à relier ses coéquipiers et à révéler leurs qualités fait de lui un leader. Sa sélection à Bogotá en 2026 est une nouvelle étape d’un parcours qui continue. Santiago incarne l’esprit de Talentos Fundarced : grandir comme sportif, c’est aussi mettre ses capacités au service de l’équipe. Le vrai leadership se montre en jouant pour les autres.'],
    'Para quienes se atreven a seguir soñando. Talentos Fundarced es nuestro programa de proyección deportiva, creado para niños, niñas y jóvenes que han demostrado que su sueño merece seguir siendo acompañado. Es un espacio de selección y fortalecimiento al que llegan deportistas que, por su cumplimiento, rendimiento, disciplina, disposición, valores y compromiso con el proceso, son identificados por nuestros profesores para continuar un camino de mayor exigencia Aquí entendemos que el talento por sí solo no es suficiente. Por eso acompañamos a nuestros deportistas para que conviertan sus capacidades en oportunidades reales, fortaleciendo su preparación deportiva, su mentalidad y su proyecto de vida. Hoy, este proceso se refleja en jóvenes que han alcanzado escenarios de representación nacional y en deportistas que avanzan dentro de estructuras profesionales, demostrando que desde nuestros territorios también es posible construir caminos hacia el alto rendimiento. Pero Talentos Fundarced es mucho más que llegar a una selección o convertirse en deportista profesional. Es aprender a persistir cuando el camino se hace difícil; entender que cada entrenamiento, cada sacrificio y cada oportunidad hacen parte de una experiencia que forma para la vida. Queremos acompañar especialmente a quienes, aun con las dificultades de su contexto, no están dispuestos a dejar de creer en lo que pueden llegar a ser. Talentos Fundarced: porque hay sueños que, cuando encuentran disciplina, formación y una oportunidad, pueden convertirse en realidad.': ['For those who dare to keep dreaming. Talentos Fundarced is our athletic development program for children and young people whose dreams deserve continued support. Coaches identify athletes who show commitment, performance, discipline, positive values, and dedication, and invite them to take on new challenges. We believe talent alone is not enough. We help athletes turn their abilities into real opportunities by strengthening their training, mindset, and life goals. Some have gone on to represent Bogotá and Colombia or advance into professional programs, showing that high-level sport can grow from our communities. Talentos Fundarced is about more than selection or becoming a professional athlete. It is about persistence, learning through every practice and sacrifice, and continuing to believe in what is possible. We especially support young people who keep moving forward despite the challenges around them. Talentos Fundarced: when discipline, training, and opportunity meet, dreams can come true.', 'Pour celles et ceux qui osent continuer à rêver. Talentos Fundarced est notre programme de développement sportif destiné aux enfants et aux jeunes dont les rêves méritent d’être accompagnés. Nos entraîneurs repèrent les athlètes qui font preuve d’engagement, de discipline, de valeurs et de persévérance afin de les aider à relever de nouveaux défis. Le talent ne suffit pas à lui seul : nous accompagnons les jeunes pour transformer leurs capacités en possibilités concrètes, en renforçant leur préparation, leur état d’esprit et leur projet de vie. Certains représentent Bogotá et la Colombie ou progressent vers le sport professionnel, montrant que le haut niveau peut aussi naître dans nos communautés. Talentos Fundarced, c’est bien plus qu’une sélection ou une carrière sportive : c’est apprendre à persévérer, tirer des leçons de chaque entraînement et continuer à croire en soi. Nous soutenons particulièrement les jeunes qui avancent malgré les difficultés. Talentos Fundarced : avec de la discipline, de la formation et une occasion, les rêves peuvent devenir réalité.'],
    'Hay sueños que comienzan compitiendo sin miedo y terminan llevando los colores de todo un país. Katherine Navarro es carácter, determinación y gol. Desde sus primeros años en Fundarced construyó su proceso deportivo compartiendo y compitiendo en grupos masculinos, escenarios en los que comenzó a marcar diferencia por su personalidad, intensidad competitiva y una capacidad goleadora que muy pronto empezó a hablar por ella. Cada entrenamiento fue fortaleciendo a una jugadora que aprendió a competir, a creer en sus capacidades y a asumir nuevos desafíos. Su camino la ha llevado a representar a Bogotá en las categorías Sub-13 y Sub-15 y posteriormente a vestir los colores de la Selección Colombia Sub-15, convirtiendo su historia en una de las grandes expresiones de lo que significa Talentos Fundarced. Katherine representa a quienes comienzan soñando desde una cancha de barrio y descubren que el lugar donde nacen los sueños no determina hasta dónde pueden llegar. Su historia todavía se está escribiendo, pero ya nos recuerda que cuando el talento encuentra carácter, disciplina y oportunidades, no existen escenarios demasiado grandes para seguir soñando.': ['Some dreams begin with fearless competition and end with the colors of an entire country. Katherine Navarro brings determination, character, and a gift for scoring. From her early years at Fundarced, she trained and competed alongside boys, standing out for her competitive drive and scoring ability. Each practice helped her believe in herself and take on new challenges. She went on to represent Bogotá at the under-13 and under-15 levels and later joined Colombia’s under-15 national team. Katherine’s story reflects what Talentos Fundarced is about: young people who start dreaming on a neighborhood field and discover that where a dream begins does not limit how far it can go. Her journey is still unfolding, reminding us that with talent, discipline, and opportunity, no stage is too big.', 'Certains rêves commencent par jouer sans peur et finissent par porter les couleurs de tout un pays. Katherine Navarro se distingue par son caractère, sa détermination et son instinct de buteuse. Dès ses débuts à Fundarced, elle s’est entraînée et a joué avec des garçons, se démarquant par son intensité et son efficacité devant le but. Chaque entraînement l’a aidée à croire en elle et à relever de nouveaux défis. Elle a représenté Bogotá en catégories U13 et U15, puis la Colombie avec l’équipe nationale U15. Son histoire incarne Talentos Fundarced : partie d’un terrain de quartier, Katherine a découvert que le lieu où naît un rêve ne limite pas sa portée. Son parcours continue et nous rappelle qu’avec du talent, de la discipline et des possibilités, aucun objectif n’est trop grand.'],
    'Selección Bogotá Futsal 2025· Campeona Nacional e Internacional Hay talentos que se reconocen por lo que hacen con el balón; otros, por la forma en que enfrentan cada desafío. Salomé tiene las dos cosas. Desde su llegada a Fundarced, Salomé Buitrago mostró ímpetu, cumplimiento, carácter y una profunda convicción por ir siempre hacia adelante. Es una jugadora que compite hasta el último momento, que entiende que un marcador adverso nunca significa dejar de intentarlo y que ha aprendido a transformar las dificultades del juego en razones para continuar. Su talento deportivo está acompañado por una cualidad que engrandece todavía más su proceso: la humildad para seguir aprendiendo, incluso después de alcanzar grandes logros. En 2025, su camino la llevó a integrar la Selección Bogotá de Fútbol Sala, participando en la Liga Evolución CONMEBOL y viviendo experiencias competitivas de nivel nacional e internacional. Con Bogotá alcanzó el título nacional en el Interligas de Colombia y posteriormente celebró un nuevo campeonato en competencia suramericana. Una trayectoria extraordinaria para una deportista que todavía tiene mucho camino por recorrer. Salomé representa Talentos Fundarced porque nos recuerda que los grandes sueños no se abandonan cuando el marcador está en contra: se defienden con carácter, se persiguen con convicción y se alcanzan sin perder la humildad.': ['Bogotá Futsal Team 2025 · National and international champion. Some talents stand out for what they do with the ball; others for how they face challenges. Salomé has both. Since joining Fundarced, Salomé Buitrago has shown drive, commitment, character, and a determination to keep moving forward. She competes until the final whistle and turns setbacks into reasons to keep trying. Her athletic talent is matched by a quality that makes her journey even stronger: the humility to keep learning after every success. In 2025, she joined Bogotá’s futsal team, played in the CONMEBOL Evolution League, won Colombia’s Interligas national title, and celebrated a South American championship. Her journey is remarkable, and there is still much ahead. Salomé reminds us that great dreams are not abandoned when the score is against you: they are defended with character, pursued with conviction, and achieved without losing humility.', 'Sélection de futsal de Bogotá 2025 · Championne nationale et internationale. Certains talents se distinguent par leur jeu ; d’autres par leur façon d’affronter les défis. Salomé possède les deux. Depuis son arrivée à Fundarced, Salomé Buitrago fait preuve d’énergie, de sérieux, de caractère et d’une volonté profonde d’avancer. Elle se bat jusqu’au bout et transforme les difficultés en raisons de continuer. Son talent sportif s’accompagne d’une qualité essentielle : l’humilité qui lui permet de continuer à apprendre, même après de grandes réussites. En 2025, elle a rejoint l’équipe de futsal de Bogotá, participé à la Ligue Évolution de la CONMEBOL, remporté le titre national Interligas de Colombie puis un championnat sud-américain. Son parcours est remarquable et ne fait que commencer. Salomé nous rappelle qu’un grand rêve ne s’abandonne pas quand le score est défavorable : il se défend avec caractère, se poursuit avec conviction et se réalise sans perdre son humilité.'],
    'Carácter para competir. Potencia para definir. Juan Román es un pívot de presencia, fortaleza y carácter. Futbolista de futsal profesional vinculado al Club D’Martin, ha construido un estilo de juego en el que su capacidad física se convierte en una herramienta para el equipo: de espaldas al arco protege, aguanta, conecta y hace jugar a sus compañeros; pero cuando logra girar y quedar de frente, aparece su esencia: el gol. Su llegada al escenario profesional representa el resultado de seguir creyendo y trabajando por una oportunidad. Juan hace parte de Talentos Fundarced porque su historia demuestra que los sueños deportivos también se construyen con carácter, sacrificio y perseverancia. Donde otros ven presión, él encuentra una oportunidad para competir.': ['Competitive spirit. Power to finish. Juan Román is a strong, determined futsal pivot who plays for Club D’Martin. He uses his physical strength to protect the ball, connect with teammates, and create chances; when he turns toward goal, his instinct to score takes over. His professional journey reflects belief, hard work, and perseverance. Juan is part of Talentos Fundarced because athletic dreams are built through character and dedication. Where others see pressure, he sees a chance to compete.', 'Esprit de compétition et puissance devant le but. Juan Román est un pivot de futsal professionnel au Club D’Martin, reconnu pour sa présence et sa détermination. Il protège le ballon, fait le lien avec ses coéquipiers et crée des occasions ; lorsqu’il se tourne vers le but, son instinct de buteur s’exprime. Son parcours professionnel témoigne de sa confiance, de son travail et de sa persévérance. Juan fait partie de Talentos Fundarced : les rêves sportifs se construisent aussi avec du caractère et du dévouement. Là où certains voient de la pression, il voit une occasion de jouer.'],
    'Jerarquía bajo los tres palos. Pasión para defender un sueño. Juan Ledesma, conocido como “Wimpy”, representa seguridad, carácter y pasión por el arco. Portero de futsal profesional y actualmente vinculado al proceso de la Universidad Sergio Arboleda, se ha caracterizado por su capacidad técnica, sus grandes reflejos y esa personalidad que necesita quien asume la responsabilidad de ser el último hombre del equipo. Su camino es una muestra de crecimiento, constancia y proyección. Cada atajada representa años de aprendizaje y un sueño que continúa construyéndose. Wimpy es Talento Fundarced porque entendió que defender un arco también significa defender con disciplina aquello que algún día soñaste alcanzar.': ['Command in goal. Passion for defending a dream. Juan Ledesma, known as “Wimpy,” is a professional futsal goalkeeper connected with Universidad Sergio Arboleda. His technique, quick reflexes, and confidence make him a reliable last line of defense. His journey shows growth and persistence; every save reflects years of learning and a dream still taking shape. Wimpy is a Talento Fundarced because he knows that guarding a goal also means staying disciplined in pursuit of what you dream of achieving.', 'Autorité dans les buts et passion pour défendre un rêve. Juan Ledesma, surnommé « Wimpy », est gardien professionnel de futsal et poursuit son parcours à l’Université Sergio Arboleda. Sa technique, ses réflexes et son assurance font de lui le dernier rempart de son équipe. Son parcours témoigne de sa progression et de sa persévérance ; chaque arrêt représente des années d’apprentissage et un rêve qui se construit. Wimpy est un Talento Fundarced : défendre un but, c’est aussi poursuivre avec discipline ce que l’on rêve d’accomplir.'],
    'Historias reales de nuestra comunidad': ['Real stories from our community', 'Des histoires vraies de notre communauté'],
    'Conoce nuestra historia directamente desde YouTube.': ['Discover our story on YouTube.', 'Découvrez notre histoire sur YouTube.'],
    'Una comunidad que transforma': ['A community that creates change', 'Une communauté qui transforme'],
    'Nuestra esencia': ['Our essence', 'Notre identité'],
    'Una historia para llegar más lejos': ['A story of reaching further', 'Une histoire pour aller plus loin'],
    'KATHERINE NAVARRO | SELECCIÓN COLOMBIA': ['KATHERINE NAVARRO | COLOMBIA NATIONAL TEAM', 'KATHERINE NAVARRO | ÉQUIPE NATIONALE DE COLOMBIE'],
    'JUAN ROMÁN | PÍVOT · CAT. 2005': ['JUAN ROMÁN | PIVOT · CLASS OF 2005', 'JUAN ROMÁN | PIVOT · PROMOTION 2005'],
    'SANTIAGO GUZMAN | CIERRE - CAT. 2008.': ['SANTIAGO GUZMÁN | FIXO · CLASS OF 2008', 'SANTIAGO GUZMÁN | FIXE · PROMOTION 2008'],
    'JUAN LEDESMA “WIMPY” | PORTERO · CAT. 2006': ['JUAN LEDESMA “WIMPY” | GOALKEEPER · CLASS OF 2006', 'JUAN LEDESMA « WIMPY » | GARDIEN · PROMOTION 2006'],
    'SALOMÉ BUITRAGO | CAT. 2012.': ['SALOMÉ BUITRAGO | CLASS OF 2012', 'SALOMÉ BUITRAGO | PROMOTION 2012'],
    'Quiero conocer Talentos FUNDARCED': ['Learn about FUNDARCED Talents', 'Découvrir Talentos FUNDARCED'],
    'Contacto y solicitud para unirme a FUNDARCED': ['Contact and request to join FUNDARCED', 'Contact et demande pour rejoindre FUNDARCED'],
    'Se abrió tu aplicación de correo para enviar el mensaje.': ['Your email app opened with the message ready to send.', 'Votre application de courriel s’est ouverte avec le message prêt à envoyer.'],
    'Se abrió WhatsApp con tu mensaje preparado.': ['WhatsApp opened with your message ready.', 'WhatsApp s’est ouvert avec votre message prêt à envoyer.'],
    'Hola FUNDARCED, quiero unirme.': ['Hello FUNDARCED, I would like to get involved.', 'Bonjour FUNDARCED, je souhaite participer.'],
    'correo@ejemplo.com': ['name@example.com', 'nom@exemple.com'],
    'Video destacado de FUNDARCED': ['Featured FUNDARCED video', 'Vidéo à la une de FUNDARCED'],
    'Experiencia de FUNDARCED': ['FUNDARCED experience', 'Expérience FUNDARCED'],
    'Video de FUNDARCED': ['FUNDARCED video', 'Vidéo FUNDARCED'],
    'FUNDARCED — Inicio': ['FUNDARCED — Home', 'FUNDARCED — Accueil'],
    'Logo FUNDARCED': ['FUNDARCED logo', 'Logo FUNDARCED'],
    'Deportistas y jóvenes que representan la formación para la vida': ['Athletes and young people representing education for life', 'Athlètes et jeunes qui incarnent l’éducation pour la vie'],
    'Familia recibiendo ayudas de FUNDARCED': ['Family receiving support from FUNDARCED', 'Famille recevant l’aide de FUNDARCED'],
    'Acompañamiento solidario a familias': ['Community support for families', 'Soutien solidaire aux familles'],
    'Actividad de formación para la vida': ['Life skills activity', 'Activité de formation à la vie'],
    'Deportista del programa Talentos FUNDARCED': ['Athlete from the FUNDARCED Talents program', 'Athlète du programme Talentos FUNDARCED'],
    'Deportista destacada de FUNDARCED con uniforme deportivo': ['Featured FUNDARCED athlete in uniform', 'Athlète de FUNDARCED en tenue sportive'],
    'Despertando la mente de personas mayores con juegos': ['Brain games for older adults', 'Jeux de réflexion pour les personnes âgées'],
    'Encuentro de formación deportiva': ['Sports training gathering', 'Rencontre de formation sportive'],
    'Entrega de apoyo a la comunidad': ['Community support delivery', 'Remise d’aide à la communauté'],
    'Experiencia deportiva competitiva de FUNDARCED': ['FUNDARCED competitive sports experience', 'Expérience sportive de compétition de FUNDARCED'],
    'Experiencia deportiva de un talento FUNDARCED': ['Sports journey of a FUNDARCED talent', 'Parcours sportif d’un talent FUNDARCED'],
    'Foto anterior': ['Previous photo', 'Photo précédente'],
    'Foto siguiente': ['Next photo', 'Photo suivante'],
    'Jornada de apoyo solidario': ['Community support event', 'Journée de soutien solidaire'],
    'Jornada de integración comunitaria': ['Community gathering', 'Rencontre communautaire'],
    'Joven talento deportivo de FUNDARCED': ['Young FUNDARCED sports talent', 'Jeune talent sportif de FUNDARCED'],
    'Jóvenes en una actividad deportiva de FUNDARCED': ['Young people at a FUNDARCED sports activity', 'Jeunes lors d’une activité sportive de FUNDARCED'],
    'Juegos didacticos': ['Educational games', 'Jeux éducatifs'],
    'Participación competitiva de Talentos FUNDARCED': ['FUNDARCED Talents in competition', 'Talentos FUNDARCED en compétition'],
    'Participante del programa Talentos FUNDARCED': ['Participant in the FUNDARCED Talents program', 'Participant au programme Talentos FUNDARCED'],
    'Participantes en entrenamiento deportivo': ['Participants at sports training', 'Participants à un entraînement sportif'],
    'Pasando tiempo y compañamiento con los mayores.': ['Spending time with and supporting older adults', 'Partager du temps et accompagner les personnes âgées'],
    'Presentacion a la musica Colombiana': ['Performance to Colombian music', 'Présentation au rythme de la musique colombienne'],
    'Proceso de formación de un talento FUNDARCED': ['Development journey of a FUNDARCED talent', 'Parcours de formation d’un talent FUNDARCED'],
    'Progreso de fotos': ['Photo progress', 'Progression des photos'],
    'Regalo para niños': ['Gift for children', 'Cadeau pour les enfants'],
    'SALOMÉ BUITRAGO | CAT. 2012': ['SALOMÉ BUITRAGO | CLASS OF 2012', 'SALOMÉ BUITRAGO | PROMOTION 2012'],
    'Talento deportivo de FUNDARCED': ['FUNDARCED sports talent', 'Talent sportif de FUNDARCED'],
    'Talento deportivo de FUNDARCED en competencia': ['FUNDARCED sports talent in competition', 'Talent sportif de FUNDARCED en compétition'],
    'Talento FUNDARCED en actividad deportiva': ['FUNDARCED talent in a sports activity', 'Talent FUNDARCED lors d’une activité sportive'],
    'Talento FUNDARCED en entrenamiento deportivo': ['FUNDARCED talent at sports training', 'Talent FUNDARCED à l’entraînement sportif'],
    'Talento FUNDARCED en proceso deportivo': ['FUNDARCED talent in development', 'Talent FUNDARCED en formation sportive'],
    'Talentos FUNDARCED en proceso competitivo': ['FUNDARCED Talents in competition training', 'Talentos FUNDARCED en préparation à la compétition'],
    'Visitar Instagram de FUNDARCED (@fundarced)': ['Visit FUNDARCED on Instagram (@fundarced)', 'Voir FUNDARCED sur Instagram (@fundarced)'],
    'Voluntariado en actividad solidaria': ['Volunteers at a community support event', 'Bénévoles lors d’une action solidaire'],
  };

  const normalize = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  const languageSelect = document.querySelector('#language-select');
  const textNodes = [];
  const attributes = [];
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (textWalker.nextNode()) {
    const node = textWalker.currentNode;
    if (normalize(node.nodeValue)) textNodes.push({ node, original: node.nodeValue });
  }
  document.querySelectorAll('[aria-label], [alt], [placeholder], [title]').forEach((element) => {
    ['aria-label', 'alt', 'placeholder', 'title'].forEach((attribute) => {
      if (element.hasAttribute(attribute)) attributes.push({ element, attribute, original: element.getAttribute(attribute) });
    });
  });

  const browserLanguage = () => {
    const preferences = navigator.languages?.length ? navigator.languages : [navigator.language || 'es'];
    for (const preference of preferences) {
      const language = preference.toLowerCase().split('-')[0];
      if (language === 'en' || language === 'fr') return language;
    }
    return 'es';
  };
  const getPreferredLanguage = () => {
    try { return localStorage.getItem('fundarced-language') || 'auto'; } catch { return 'auto'; }
  };

  const translated = (spanish, language) => {
    const entry = translations[normalize(spanish)];
    if (!entry || language === 'es') return spanish;
    return entry[language === 'fr' ? 1 : 0] || spanish;
  };

  const whatsappMessages = {
    'donation-main': 'Quiero apoyar la misión de llevar la fundación a más localidades y ciudades. ¿Me comparten cómo puedo donar?',
    'donation-details': 'Quiero ayudar a expandir la fundación y quisiera conocer cómo hacer mi donación.',
    'program-sports': 'me interesa el programa Deporte.',
    'program-support': 'me interesa el programa Apoyo solidario.',
    'program-arts': 'me interesa el programa Arte y cultura.',
    'program-older-adults': 'me interesa el programa Bienestar mayor.',
    'program-literature': 'me interesa el programa Recreación.',
    'program-environment': 'me interesa el programa Educación Ambiental.',
    'program-talents': 'me interesa conocer el programa premium Talentos FUNDARCED.',
    'general': 'quiero recibir información.',
  };

  const applyLanguage = (requested) => {
    const language = requested === 'auto' ? browserLanguage() : requested;
    document.documentElement.lang = language;
    document.title = translated('FUNDARCED | Formación para la Vida', language);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = translated('FUNDARCED es una organización sin ánimo de lucro que fortalece habilidades para la vida en Usme y Tocaimita a través del deporte, el arte, la cultura y la educación.', language);

    textNodes.forEach(({ node, original }) => {
      const leading = original.match(/^\s*/)?.[0] || '';
      const trailing = original.match(/\s*$/)?.[0] || '';
      const value = translated(original, language);
      node.nodeValue = value === original ? original : `${leading}${value}${trailing}`;
    });
    attributes.forEach(({ element, attribute, original }) => {
      element.setAttribute(attribute, translated(original, language));
    });
    document.querySelectorAll('[data-i18n-wa]').forEach((link) => {
      const message = whatsappMessages[link.dataset.i18nWa];
      if (!message) return;
      const greeting = language === 'fr' ? 'Bonjour FUNDARCED, ' : language === 'en' ? 'Hello FUNDARCED, ' : 'Hola FUNDARCED, ';
      const value = language === 'es' ? message : translated(message, language);
      const url = new URL(link.href);
      url.searchParams.set('text', `${greeting}${value}`);
      link.href = url.toString();
    });
    if (languageSelect) languageSelect.value = requested;
    window.FUNDARCED_CURRENT_LANGUAGE = language;
  };

  window.FUNDARCED_T = (spanish) => translated(spanish, window.FUNDARCED_CURRENT_LANGUAGE || 'es');
  if (languageSelect) {
    languageSelect.value = getPreferredLanguage();
    languageSelect.addEventListener('change', () => {
      try { localStorage.setItem('fundarced-language', languageSelect.value); } catch { /* Preference remains for this visit. */ }
      applyLanguage(languageSelect.value);
    });
  }
  applyLanguage(getPreferredLanguage());
})();

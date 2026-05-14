import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ArticleData {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  content: ReactNode;
}

// ─── All blog posts data ───────────────────────────────────────────────────

const blogPosts = [
  {
    slug: "como-elegirte-sin-miedo",
    title: "Cómo elegirte sin miedo: la guía definitiva",
    excerpt:
      "Descubre los 5 pasos para comenzar a priorizarte sin culpa y vivir una vida alineada con tus valores más profundos.",
    date: "2026-05-10",
    category: "Crecimiento Personal",
  },
  {
    slug: "mentalidad-femenina-poder",
    title: "Mentalidad femenina: el poder que siempre tuviste",
    excerpt:
      "La mente femenina tiene una capacidad extraordinaria de adaptación, empatía y liderazgo. Aprende a activar ese poder.",
    date: "2026-05-05",
    category: "Mentalidad",
  },
  {
    slug: "lecciones-50-paises",
    title: "50 países, 50 lecciones de vida",
    excerpt:
      "Después de visitar más de 50 países, estas son las lecciones más transformadoras que el mundo me enseñó.",
    date: "2026-04-28",
    category: "Viajes",
  },
  {
    slug: "psicologia-amor-propio",
    title: "Psicología del amor propio: qué dice la ciencia",
    excerpt:
      "La ciencia detrás del amor propio: cómo desarrollarlo, mantenerlo y usarlo como base para una vida extraordinaria.",
    date: "2026-04-20",
    category: "Psicología",
  },
  {
    slug: "record-guinness-historia",
    title: "Cómo participé en un Récord Guinness",
    excerpt:
      "La historia detrás de mi participación en el Récord Guinness y lo que esa experiencia me enseñó sobre los límites humanos.",
    date: "2026-04-15",
    category: "Experiencias",
  },
  {
    slug: "coaching-vs-psicologia",
    title: "Coaching vs Psicología: ¿cuál necesitas?",
    excerpt:
      "Una psicóloga y coach te explica las diferencias reales entre ambas disciplinas y cuándo usar cada una.",
    date: "2026-04-08",
    category: "Psicología",
  },
  {
    slug: "habitos-mujer-exitosa",
    title: "7 hábitos de una mujer mentalmente fuerte",
    excerpt:
      "Estas no son teorías. Son los hábitos que transformaron mi vida y la de cientos de mujeres que han trabajado conmigo.",
    date: "2026-04-01",
    category: "Hábitos",
  },
  {
    slug: "miedo-al-exito-mujeres",
    title: "El miedo al éxito en las mujeres: por qué ocurre",
    excerpt:
      "¿Por qué tantas mujeres brillantes se autosabotean? La psicología detrás del miedo al éxito y cómo superarlo.",
    date: "2026-03-25",
    category: "Mentalidad",
  },
  {
    slug: "conferencista-internacional-camino",
    title: "Mi camino para convertirme en conferencista internacional",
    excerpt:
      "Cómo pasé de ser psicóloga local a conferencista en múltiples países. Sin atajos, solo trabajo y estrategia.",
    date: "2026-03-18",
    category: "Experiencias",
  },
  {
    slug: "viaje-sola-mujer-consejos",
    title: "Viajar sola siendo mujer: mi guía completa",
    excerpt:
      "Después de 50 países, comparto mis mejores consejos de seguridad, mentalidad y libertad para mujeres viajeras.",
    date: "2026-03-10",
    category: "Viajes",
  },
  {
    slug: "liderar-desde-la-autenticidad",
    title: "Liderazgo femenino: liderar desde la autenticidad",
    excerpt:
      "El liderazgo más poderoso no viene de imitar a otros, sino de liderar siendo completamente tú misma.",
    date: "2026-03-03",
    category: "Liderazgo",
  },
  {
    slug: "elegirme-sin-miedo-libro-historia",
    title: "La historia detrás de 'Elegirme sin miedo'",
    excerpt:
      "Por qué escribí este libro, qué significa para mí, y por qué creo que puede cambiar la vida de millones de mujeres.",
    date: "2026-02-25",
    category: "Libro",
  },
  {
    slug: "inteligencia-emocional-mujeres",
    title: "Inteligencia emocional: la habilidad del siglo XXI",
    excerpt:
      "Por qué la inteligencia emocional es la competencia más valiosa del siglo XXI y cómo desarrollarla.",
    date: "2026-02-18",
    category: "Psicología",
  },
  {
    slug: "mentor-spencer-hoffmann-lecciones",
    title: "Lo que aprendí de mi mentor Spencer Hoffmann",
    excerpt:
      "Ser mentoreada por uno de los mejores del mundo cambia tu perspectiva. Estas son las lecciones que transformaron mi carrera.",
    date: "2026-02-10",
    category: "Mentoría",
  },
  {
    slug: "proposito-de-vida-encontrar",
    title: "Cómo encontrar tu propósito de vida en 5 pasos",
    excerpt:
      "El propósito no se inventa, se descubre. Una guía práctica basada en psicología y crecimiento personal.",
    date: "2026-02-03",
    category: "Crecimiento Personal",
  },
];

// ─── Article content lookup ───────────────────────────────────────────────

const articleContent: Record<string, ArticleData> = {
  "como-elegirte-sin-miedo": {
    title: "Cómo elegirte sin miedo: la guía definitiva",
    excerpt:
      "Descubre los 5 pasos para comenzar a priorizarte sin culpa y vivir una vida alineada con tus valores más profundos.",
    category: "Crecimiento Personal",
    date: "2026-05-10",
    content: (
      <>
        <p>
          Elegirte. Suena simple. Pero para la mayoría de las mujeres que conozco — y para mí misma en muchos momentos de mi vida — es uno de los actos más difíciles y más revolucionarios que existe. ¿Por qué? Porque desde pequeñas nos enseñaron que elegir primero a los demás es una virtud, y elegirte a ti misma es egoísmo.
        </p>
        <p>
          He pasado años estudiando psicología, recorriendo más de 50 países y trabajando con cientos de mujeres. Y si hay una verdad que he aprendido con certeza es esta: <strong>no puedes dar desde la escasez</strong>. Cuando te abandonas a ti misma para llenar las necesidades de los demás, terminas vacía, resentida y desconectada de quien realmente eres.
        </p>
        <h2>¿Qué significa realmente elegirte?</h2>
        <p>
          Elegirte no significa ser egoísta. No significa ignorar a quienes amas. Significa reconocer que tus necesidades, tus sueños, tus valores y tu bienestar merecen el mismo espacio que les das a los demás. Es un acto de amor — a ti misma y, paradójicamente, a todas las personas que te rodean.
        </p>
        <p>
          Cuando te eliges, llegas a tus relaciones desde la plenitud. Cuando no te eliges, llegas desde la deuda emocional. La diferencia es radical.
        </p>
        <h2>Los 5 pasos para elegirte sin miedo</h2>
        <p>
          <strong>Paso 1: Identifica tus valores reales.</strong> No los que te dijeron que debías tener, sino los que cuando los vives te hacen sentir más viva. Tómate 20 minutos y escribe: ¿Cuándo me siento más yo misma? ¿Qué me importa profundamente? Esas respuestas son tu brújula.
        </p>
        <p>
          <strong>Paso 2: Reconoce los patrones de abandono.</strong> ¿En qué momentos te callas? ¿Cuándo dices que sí cuando quieres decir no? ¿Dónde pospones tus sueños? Estos patrones no son defectos; son aprendizajes que ya cumplieron su función. Ahora puedes soltarlos.
        </p>
        <p>
          <strong>Paso 3: Establece límites desde el amor, no desde el enojo.</strong> Un límite bien puesto no es un muro — es una declaración de respeto mutuo. Cuando dices "esto no me funciona", estás siendo honesta contigo y con la otra persona. Eso es amor.
        </p>
        <p>
          <strong>Paso 4: Practica el "sí" consciente.</strong> Durante una semana, antes de decir sí a cualquier cosa, pregúntate: ¿Esto me acerca o me aleja de quien quiero ser? Si la respuesta es alejarte, date permiso de declinar. Sin explicaciones largas. Sin culpa.
        </p>
        <p>
          <strong>Paso 5: Celebra cada pequeña elección.</strong> Cada vez que te eliges — aunque sea en algo pequeño — reconócelo. Dijiste lo que pensabas. Te tomaste tiempo para ti. Priorizaste tu salud. Esas pequeñas victorias son los ladrillos de una vida extraordinaria.
        </p>
        <h2>El miedo que aparece cuando empiezas a elegirte</h2>
        <p>
          Cuando comienzas este proceso, el miedo va a aparecer. Miedo a decepcionar a otros. Miedo a ser mal vista. Miedo a quedarte sola. Esto es completamente normal — es el sistema nervioso que quiere mantenerte "a salvo" en lo conocido. Pero lo conocido no siempre es lo mejor.
        </p>
        <p>
          He visto a mujeres de todas las edades transformar sus vidas cuando finalmente se dieron permiso de elegirse. Y lo que encuentran del otro lado no es soledad — es libertad. Y conexiones más auténticas que las que tenían antes.
        </p>
        <h2>Tu vida es tu responsabilidad</h2>
        <p>
          Nadie va a llegar a salvarte. Nadie va a venir a decirte "ahora es tu turno de priorizarte". Ese momento llega cuando tú decides que ha llegado. Y puede ser hoy.
        </p>
        <p>
          Elegirte sin miedo no es un destino — es una práctica diaria. A veces lo harás perfectamente, a veces tropezarás. Lo importante es que cada día recuerdes que mereces estar en tu propia lista de prioridades. De hecho, mereces estar en el primer lugar.
        </p>
        <p>
          Si este artículo resonó contigo, te invito a leer mi libro <em>Elegirme sin miedo</em>, donde profundizo en estas herramientas y comparto historias reales de mujeres que transformaron su relación consigo mismas.
        </p>
      </>
    ),
  },

  "mentalidad-femenina-poder": {
    title: "Mentalidad femenina: el poder que siempre tuviste",
    excerpt:
      "La mente femenina tiene una capacidad extraordinaria de adaptación, empatía y liderazgo. Aprende a activar ese poder.",
    category: "Mentalidad",
    date: "2026-05-05",
    content: (
      <>
        <p>
          Durante siglos, las cualidades más distintivas de la mente femenina — la empatía profunda, la capacidad de sostener múltiples perspectivas, la inteligencia emocional avanzada — fueron minimizadas, ignoradas o incluso usadas en contra de las mujeres. "Eres demasiado emocional." "Piensas con el corazón, no con la cabeza." Esas frases no eran descripción: eran control.
        </p>
        <p>
          Hoy, la ciencia nos da la razón. Investigaciones en neuropsicología, liderazgo organizacional e inteligencia emocional demuestran que las características históricamente asociadas con la mente femenina son precisamente las más valoradas en el mundo moderno.
        </p>
        <h2>¿Qué hace especial a la mente femenina?</h2>
        <p>
          No se trata de que las mujeres sean superiores. Se trata de que hay patrones de pensamiento — que muchas mujeres desarrollan naturalmente a través de su socialización y experiencias — que resultan extraordinariamente poderosos cuando se usan de manera consciente.
        </p>
        <p>
          <strong>Pensamiento sistémico:</strong> La capacidad de ver conexiones entre elementos aparentemente separados. Las mujeres estadísticamente puntúan más alto en esta habilidad, lo que las hace excelentes estrategas y solucionadoras de problemas complejos.
        </p>
        <p>
          <strong>Empatía funcional:</strong> No solo sentir lo que otros sienten, sino usarlo como información para tomar mejores decisiones. Los mejores líderes del mundo, independientemente del género, cultivan activamente esta habilidad.
        </p>
        <p>
          <strong>Intuición informada:</strong> Esa "corazonada" que sientes no es magia — es tu cerebro procesando miles de señales subconscientemente y presentándote una conclusión antes de que puedas articular el razonamiento. Es una forma de inteligencia, no una debilidad.
        </p>
        <p>
          <strong>Colaboración sobre competencia:</strong> La neurociencia muestra que el cerebro femenino tiene mayor conectividad entre hemisferios, lo que facilita el pensamiento integrador y la colaboración. En un mundo donde los problemas complejos requieren equipos diversos, esta es una ventaja estratégica.
        </p>
        <h2>Cómo activar tu poder mental</h2>
        <p>
          El primer paso es dejar de pedir disculpas por cómo piensas. Tu forma de procesar el mundo — sensible, conectada, multidimensional — no es un defecto que hay que corregir. Es una herramienta que hay que afilar.
        </p>
        <p>
          Empieza por notar cuándo minimizas tu propia intuición porque crees que "no es lógico". ¿Cuántas veces has ignorado esa voz interior y luego te has arrepentido? Tu intuición es datos. Aprende a leerla.
        </p>
        <p>
          Segundo, deja de disculparte por tu empatía. En cambio, aprende a usarla estratégicamente. Cuando entras a una negociación y puedes leer la sala, cuando escuchas a alguien y detectas lo que no está diciendo — eso es poder. Úsalo.
        </p>
        <h2>El trabajo interno es la base</h2>
        <p>
          Todo el potencial del mundo no sirve de nada si por dentro te estás saboteando. He trabajado con mujeres brillantísimas que bloqueaban su propio poder porque no creían merecer el espacio que ocupaban.
        </p>
        <p>
          El verdadero trabajo de activar tu mente no es aprender nuevas técnicas — es desaprender las creencias limitantes que te dijeron que eras menos. Eso requiere valentía, consistencia y, en muchos casos, acompañamiento profesional.
        </p>
        <p>
          Pero te aseguro que del otro lado de ese trabajo hay una versión de ti que no reconocerás — no porque seas diferente, sino porque finalmente te habrás permitido ser completamente tú misma.
        </p>
      </>
    ),
  },

  "lecciones-50-paises": {
    title: "50 países, 50 lecciones de vida",
    excerpt:
      "Después de visitar más de 50 países, estas son las lecciones más transformadoras que el mundo me enseñó.",
    category: "Viajes",
    date: "2026-04-28",
    content: (
      <>
        <p>
          Cuando llegué a mi primer país fuera de Venezuela, todo me parecía extraño. El idioma, la comida, los gestos, los silencios. No entendía nada — y ese no entender fue el mayor maestro de mi vida.
        </p>
        <p>
          Cincuenta y tantos países después, puedo decir con certeza que los viajes no solo te muestran el mundo. Te muestran quién eres cuando nadie te conoce, cuando tus roles habituales desaparecen, cuando no tienes más herramienta que tú misma.
        </p>
        <h2>Las lecciones más profundas</h2>
        <p>
          <strong>1. La felicidad no depende de la cantidad.</strong> He visto a personas en comunidades con muy pocos recursos materiales vivir con una alegría genuina que muchos de los más ricos del mundo no tienen. La felicidad es un estado interior, no un nivel de consumo.
        </p>
        <p>
          <strong>2. La hospitalidad es universal.</strong> En cada país — sin importar el idioma ni la cultura — he encontrado personas dispuestas a compartir lo poco o lo mucho que tienen. La humanidad básica trasciende todas las fronteras.
        </p>
        <p>
          <strong>3. Tu historia no es la única historia.</strong> Crecemos creyendo que nuestra forma de ver el mundo es la forma. Viajar destruye ese mito. Existen decenas de formas válidas de organizar una familia, entender el tiempo, relacionarse con la muerte, celebrar la vida. Ninguna es absoluta.
        </p>
        <p>
          <strong>4. La soledad es diferente al estar sola.</strong> Viajar sola me enseñó que puedes estar completamente sola y sentirte plena, conectada, viva. Y también puedes estar rodeada de gente y sentirte profundamente sola. La diferencia está en tu relación contigo misma.
        </p>
        <p>
          <strong>5. El miedo disminuye con la acción.</strong> Cada nuevo país que visité empezaba con cierto miedo a lo desconocido. Y cada vez que di el primer paso de todos modos, ese miedo se convirtió en confianza. No es que el miedo desaparezca — es que aprendes que puedes actuar con él presente.
        </p>
        <h2>Lo que los viajes hacen por tu psicología</h2>
        <p>
          Desde la perspectiva psicológica, la exposición a diferentes culturas desarrolla lo que se llama complejidad cognitiva — la capacidad de sostener múltiples perspectivas simultáneamente sin necesitar resolverlas en una sola respuesta "correcta". Esta habilidad es fundamental para la salud mental, la creatividad y el liderazgo.
        </p>
        <p>
          También he observado, en mí y en mis clientes que viajan, un fenómeno que llamo "efecto espejo del viaje": cuando te quitas de tu ambiente habitual, puedes verte con más claridad. Los patrones que en casa son invisibles porque son parte del escenario, en un lugar nuevo se vuelven obvios.
        </p>
        <h2>El viaje más importante</h2>
        <p>
          Con todo lo que los viajes físicos me han dado, debo decirte algo: el viaje más transformador que he hecho no tiene destino en el mapa. Es el viaje hacia adentro — el de conocerme, aceptarme, elegirme. Ese viaje comenzó a los 50 países, cuando me di cuenta de que podía conocer el mundo entero y seguir sin conocerme a mí misma si no hacía el trabajo interior.
        </p>
        <p>
          Hoy, cada país que visito lo visito desde un lugar más completo. Porque me llevo conmigo a alguien que ya no me es extraña.
        </p>
      </>
    ),
  },

  "psicologia-amor-propio": {
    title: "Psicología del amor propio: qué dice la ciencia",
    excerpt:
      "La ciencia detrás del amor propio: cómo desarrollarlo, mantenerlo y usarlo como base para una vida extraordinaria.",
    category: "Psicología",
    date: "2026-04-20",
    content: (
      <>
        <p>
          "Ámate a ti misma." Lo hemos escuchado tantas veces que casi ha perdido su fuerza. Se ha convertido en hashtag, en frase de taza de café, en mensaje vago que nadie sabe exactamente cómo aplicar. Pero detrás de esa frase hay décadas de investigación psicológica seria que merece nuestra atención.
        </p>
        <p>
          El amor propio — o en términos clínicos, la autocompasión y la autoestima saludable — es uno de los predictores más robustos de bienestar mental, relaciones satisfactorias y resiliencia ante la adversidad. No es un lujo emocional: es una necesidad psicológica fundamental.
        </p>
        <h2>Lo que dice la investigación</h2>
        <p>
          La Dra. Kristin Neff, pionera en la investigación sobre autocompasión en la Universidad de Texas, ha demostrado que la autocompasión tiene tres componentes fundamentales: mindfulness (conciencia sin juicio de lo que sientes), humanidad compartida (reconocer que el sufrimiento es parte de la experiencia humana) y amabilidad hacia uno mismo (tratarse con la misma gentileza que le ofreceríamos a un amigo).
        </p>
        <p>
          Las personas con alta autocompasión muestran menores niveles de ansiedad y depresión, mayor motivación para mejorar, relaciones más satisfactorias y mayor capacidad de recuperarse de fracasos. No porque sean más débiles — sino porque gastan menos energía en la autocrítica destructiva y más en el aprendizaje y el crecimiento.
        </p>
        <h2>La diferencia entre amor propio y narcisismo</h2>
        <p>
          Una de las confusiones más comunes: el amor propio real no tiene nada que ver con el narcisismo. El narcisismo requiere sentirse superior a los demás para mantener una autoestima frágil. El amor propio genuino no depende de comparaciones — viene de una relación estable con uno mismo que no se tambalea con la crítica o el fracaso.
        </p>
        <p>
          Las personas con amor propio saludable pueden reconocer sus errores sin destruirse, aceptar críticas sin colapsar, y admitir sus limitaciones sin que eso amenace su sentido de valor personal.
        </p>
        <h2>Cómo desarrollar amor propio basado en evidencia</h2>
        <p>
          <strong>La práctica del diálogo interno compasivo:</strong> Cuando cometes un error, ¿cómo te hablas? ¿Con dureza, con vergüenza? Intenta reformular ese diálogo como si le estuvieras hablando a tu mejor amiga. "Cometiste un error. Eso es humano. ¿Qué puedes aprender de esto?" Esta simple reformulación activa circuitos cerebrales completamente diferentes — los de la seguridad y el aprendizaje, en lugar de los del peligro y la parálisis.
        </p>
        <p>
          <strong>Journaling de apreciación propia:</strong> No el típico "escribo tres cosas que agradezco del mundo" — sino tres cosas que aprecias de ti misma hoy. Puede ser algo tan pequeño como "hoy cumplí mi promesa de salir a caminar." Celebrar los micro-éxitos construye la base del amor propio.
        </p>
        <p>
          <strong>Límites como acto de amor:</strong> Cada vez que pones un límite desde un lugar de respeto propio, estás practicando el amor propio. No como teoría, sino como acción concreta. Los límites son amor propio en movimiento.
        </p>
        <h2>El amor propio no es un estado permanente</h2>
        <p>
          Una de las cosas más importantes que he aprendido — tanto en mi formación clínica como en mi propia vida — es que el amor propio no es un destino al que llegas una vez y te quedas. Es una práctica diaria que fluctúa. Habrá días en que te amarás con facilidad, y días en que será un trabajo consciente. Ambos son normales. La clave es tener herramientas para volver cuando te alejas.
        </p>
      </>
    ),
  },

  "record-guinness-historia": {
    title: "Cómo participé en un Récord Guinness",
    excerpt:
      "La historia detrás de mi participación en el Récord Guinness y lo que esa experiencia me enseñó sobre los límites humanos.",
    category: "Experiencias",
    date: "2026-04-15",
    content: (
      <>
        <p>
          Hay momentos en la vida que te enseñan más sobre ti misma que años de reflexión. Para mí, participar en un Récord Guinness fue uno de esos momentos. No porque el récord en sí fuera el punto — sino por lo que descubrí sobre los límites humanos, sobre la fuerza colectiva, y sobre lo que somos capaces cuando nos comprometemos con algo más grande que nosotros mismos.
        </p>
        <p>
          Cuando me invitaron a participar, mi primera reacción fue la que imaginas: "¿Yo? ¿Para un Récord Guinness?" Hay algo en la magnitud de esa frase — "Récord Mundial" — que te hace creer que es para otros. Para los excepcionales. Para los que ya demostraron algo.
        </p>
        <p>
          Esa voz en mi cabeza fue la primera lección.
        </p>
        <h2>Lección 1: Los límites están primero en la mente</h2>
        <p>
          Mucho antes de cualquier esfuerzo físico o logístico, el mayor desafío de un récord es mental. La mente busca razones para no intentarlo, para protegerte de un posible fracaso. Aprendí a reconocer esa voz — no para ignorarla, sino para responderle: "Te escucho. Y lo haremos de todas formas."
        </p>
        <h2>Lección 2: El poder de lo colectivo</h2>
        <p>
          Hay algo magnético en ser parte de un grupo humano con un objetivo compartido. Cuando cientos o miles de personas ponen su energía en un mismo punto, se genera un campo de posibilidades que ningún individuo podría crear solo. Lo viví en mi propia piel — en los momentos en que yo flaqueba, la energía del grupo me sostenía. Y viceversa.
        </p>
        <p>
          Esto cambió mi comprensión del liderazgo. Los mejores líderes no son los que brillan solos — son los que saben crear ese campo colectivo donde todos brillan más.
        </p>
        <h2>Lección 3: La preparación es confianza</h2>
        <p>
          Nada de lo que logramos ese día fue por suerte. Hubo preparación, coordinación, práctica, ajustes. Y cada hora de preparación era un depósito en la cuenta de la confianza colectiva. Cuando llegó el momento de actuar, estábamos listos — no porque no tuviéramos miedo, sino porque habíamos hecho el trabajo.
        </p>
        <h2>Lección 4: Los límites son más elásticos de lo que crees</h2>
        <p>
          Esta es quizás la lección más poderosa que me quedó: lo que creías que era tu límite, no lo es. Cuando logras algo que antes te parecía imposible, tu cerebro reescribe lo que es posible para ti. Y ese nuevo mapa mental es el que llevas al resto de tu vida.
        </p>
        <p>
          Hoy, cuando enfrento algo que me parece demasiado grande, recuerdo ese día. Recuerdo la sensación de que lo imposible se volvió posible porque decidimos intentarlo juntos. Y eso es suficiente para dar el primer paso.
        </p>
        <h2>Lo que quiero que te lleves</h2>
        <p>
          No necesitas participar en un Récord Guinness para tener tu propia versión de esta experiencia. Cada vez que te atreves a ir más lejos de lo que creías poder — en tus relaciones, en tu carrera, en tu bienestar — estás rompiendo tu propio récord. Y eso, en mi perspectiva, es lo más valioso.
        </p>
      </>
    ),
  },

  "coaching-vs-psicologia": {
    title: "Coaching vs Psicología: ¿cuál necesitas?",
    excerpt:
      "Una psicóloga y coach te explica las diferencias reales entre ambas disciplinas y cuándo usar cada una.",
    category: "Psicología",
    date: "2026-04-08",
    content: (
      <>
        <p>
          Esta es una de las preguntas que más me hacen, y tiene sentido que haya confusión: en los últimos años, el coaching proliferó de tal manera que hay coaches de todo — de vida, de negocios, de relaciones, de productividad — y muchas personas no saben cuándo necesitan un coach y cuándo necesitan una psicóloga. Como alguien que es ambas cosas, creo que puedo darte una perspectiva honesta.
        </p>
        <h2>La diferencia fundamental</h2>
        <p>
          La psicología clínica trabaja principalmente con la historia, con la mente, con patrones inconscientes y con el diagnóstico y tratamiento de condiciones de salud mental. Si tienes depresión, ansiedad clínica, trauma, trastornos alimenticios u otras condiciones, necesitas un psicólogo o psiquiatra. Punto.
        </p>
        <p>
          El coaching, en cambio, trabaja principalmente con el presente y el futuro. Parte del supuesto de que la persona está bien — o suficientemente bien — y quiere moverse de donde está hacia donde quiere estar. Es orientado a metas, a acción, a resultados.
        </p>
        <h2>¿Cuándo necesitas psicología?</h2>
        <p>
          Si hay síntomas persistentes que interfieren con tu funcionamiento diario — dificultad para levantarte, para mantener relaciones, para trabajar; si hay historia de trauma sin procesar; si hay pensamientos recurrentes que te aterran o que sientes que no puedes controlar — el primer paso es siempre la psicología o psiquiatría.
        </p>
        <p>
          No es un signo de debilidad. Es sensatez.
        </p>
        <h2>¿Cuándo necesitas coaching?</h2>
        <p>
          Si estás en un momento de transición — cambio de carrera, fin de una relación, inicio de un negocio; si tienes metas claras pero te cuesta ejecutarlas; si sientes que estás "bien" pero quieres más — si quieres crecer, no solo sanar — el coaching puede ser exactamente lo que necesitas.
        </p>
        <p>
          El coaching te da estructura, accountability y herramientas para moverte con más intención. Un buen coach no te da las respuestas — te hace las preguntas que te llevan a tus propias respuestas.
        </p>
        <h2>¿Y cuando necesitas ambas?</h2>
        <p>
          Esta es la zona donde me muevo yo con muchas de mis clientes. A veces hay una base que trabajar — creencias limitantes profundas, patrones de auto-sabotaje con raíces en la historia — y también hay metas concretas que alcanzar. En esos casos, el trabajo integrado de psicología y coaching es el más potente.
        </p>
        <p>
          Pero esto requiere que la persona que trabaje contigo tenga formación en ambas áreas. No cualquier coach puede hacer esto — y no todos los psicólogos hacen coaching.
        </p>
        <h2>Mi recomendación práctica</h2>
        <p>
          Si no estás segura de qué necesitas, comienza con una sesión de evaluación con un profesional de salud mental. Desde ahí, con más claridad sobre tu punto de partida, podrás decidir si el siguiente paso es psicoterapia, coaching, o una combinación de ambas. Lo que importa es que no esperes — buscar ayuda no es un lujo, es sabiduría.
        </p>
      </>
    ),
  },

  "habitos-mujer-exitosa": {
    title: "7 hábitos de una mujer mentalmente fuerte",
    excerpt:
      "Estas no son teorías. Son los hábitos que transformaron mi vida y la de cientos de mujeres que han trabajado conmigo.",
    category: "Hábitos",
    date: "2026-04-01",
    content: (
      <>
        <p>
          La fortaleza mental no es algo con lo que naces. No es un rasgo de personalidad fijo. Es el resultado de hábitos consistentes que, practicados con el tiempo, construyen una arquitectura interna desde la que puedes enfrentar casi cualquier cosa.
        </p>
        <p>
          He pasado años estudiando esto — primero como psicóloga, luego como coach, y siempre como alguien que trabaja activamente en su propio desarrollo. Estos son los 7 hábitos que más diferencia hacen.
        </p>
        <h2>1. Empiezan el día en sus términos</h2>
        <p>
          Las mujeres mentalmente fuertes no empiezan el día respondiendo notificaciones o revisando redes sociales. Empiezan el día en sus propios términos: con movimiento, silencio, journaling, meditación o simplemente un momento de intención. Los primeros 30 minutos del día establecen el tono emocional del resto.
        </p>
        <h2>2. Sienten sus emociones sin ser gobernadas por ellas</h2>
        <p>
          Fortaleza mental no es no sentir. Es sentir completamente sin dejar que las emociones dicten acciones impulsivas. Las mujeres fuertes tienen una capacidad de "estar con" sus emociones — observarlas, honrarlas, entenderlas — sin que eso signifique actuar desde ellas de manera destructiva.
        </p>
        <h2>3. Saben cuándo pedir ayuda</h2>
        <p>
          Contrario al mito popular, pedir ayuda es un signo de fortaleza, no de debilidad. Las mujeres mentalmente fuertes han aprendido que intentar hacerlo todo solas no es virtud — es una trampa del ego. Saben cuándo delegar, cuándo buscar apoyo, cuándo decir "no sé, necesito guía."
        </p>
        <h2>4. Fallan hacia adelante</h2>
        <p>
          Todos fallamos. La diferencia está en lo que hacemos con ese fracaso. Las mujeres mentalmente fuertes extraen el aprendizaje, hacen los ajustes necesarios, y continúan. No se quedan rumiando en el error — lo procesan y siguen moviéndose.
        </p>
        <h2>5. Cuidan sus límites energéticos</h2>
        <p>
          No todas las batallas merecen tu energía. No todas las opiniones merecen tu atención. No todas las situaciones requieren tu participación. Las mujeres fuertes son selectivas con su energía — saben que es su recurso más valioso y lo cuidan con intención.
        </p>
        <h2>6. Tienen una práctica de gratitud genuina</h2>
        <p>
          No el optimismo tóxico de "todo está bien cuando no lo está" — sino una práctica de reconocer, incluso en días difíciles, lo que sí está presente, lo que sí funciona, lo que sí tienen. Esto no niega el dolor; lo pone en perspectiva.
        </p>
        <h2>7. Invierten en su crecimiento de manera constante</h2>
        <p>
          Leen, estudian, buscan mentores, van a terapia, asisten a talleres, se hacen preguntas. El aprendizaje continuo no es algo que hacen "cuando tienen tiempo" — lo integran como parte de quiénes son. Porque saben que la versión de sí mismas que llegó hasta aquí no es necesariamente la que las llevará a donde quieren ir.
        </p>
        <p>
          Ninguno de estos hábitos es revolucionario por sí solo. La magia está en la consistencia — en elegirlos día tras día, aunque no tengas ganas, aunque sea imperfecto. Así se construye la fortaleza mental: un hábito a la vez.
        </p>
      </>
    ),
  },

  "miedo-al-exito-mujeres": {
    title: "El miedo al éxito en las mujeres: por qué ocurre",
    excerpt:
      "¿Por qué tantas mujeres brillantes se autosabotean? La psicología detrás del miedo al éxito y cómo superarlo.",
    category: "Mentalidad",
    date: "2026-03-25",
    content: (
      <>
        <p>
          He trabajado con mujeres brillantes, capaces, preparadas — mujeres que objetivamente tienen todo lo necesario para alcanzar metas extraordinarias — y aun así, se quedan cortas. Justo cuando están a punto de dar el gran salto, algo pasa: posponen la decisión, disminuyen el objetivo, sabotean la oportunidad. ¿El diagnóstico? Miedo al éxito.
        </p>
        <p>
          Y sí — existe. Y está más extendido de lo que creemos, especialmente en mujeres.
        </p>
        <h2>¿Por qué las mujeres sienten miedo al éxito?</h2>
        <p>
          La investigación psicológica identifica varias raíces. La primera: el condicionamiento social. Durante generaciones, a las mujeres se les enseñó implícita o explícitamente que brillar demasiado era peligroso — amenazante para los hombres, desagradable para las mujeres pares, incompatible con el "deber ser" femenino de humildad y servicio.
        </p>
        <p>
          Ese condicionamiento no desaparece con una generación. Vive en el cuerpo, en los patrones automáticos, en ese momento de parálisis justo cuando estás a punto de firmar el contrato, lanzar el negocio, publicar el libro.
        </p>
        <p>
          La segunda raíz es el <em>síndrome del impostor</em> — ese fenómeno ampliamente documentado en el que personas altamente competentes sienten que no merecen sus logros, que son un fraude, que en cualquier momento alguien los "descubrirá". Las mujeres reportan esta experiencia más frecuentemente que los hombres.
        </p>
        <h2>Las formas en que se manifiesta</h2>
        <p>
          El miedo al éxito no siempre se presenta como un miedo obvio. Se disfraza de procrastinación perfeccionista, de "aún no estoy lista", de bajar los precios, de trabajar mucho sin cobrar lo que merece, de evitar visibilidad justo cuando se la ofrecen.
        </p>
        <p>
          También se manifiesta en el sabotaje justo antes del éxito: la discusión innecesaria, la enfermedad repentina, el error inexplicable. El sistema nervioso, tratando de mantenerte "a salvo" en lo conocido, produce exactamente el resultado que más temes.
        </p>
        <h2>Cómo superarlo</h2>
        <p>
          El primer paso es nombrarlo. Reconocer que el miedo al éxito existe, que no es irracionalidad, que tiene raíces — y que no te define. Nombrarlo le quita parte de su poder.
        </p>
        <p>
          El segundo paso es preguntarte: <em>¿Qué creo que pasará si tengo éxito?</em> Las respuestas revelan las creencias ocultas: "Me quedaré sola." "Me envidiarán." "No podré sostenerlo." "Ya no seré yo misma." Cada una de esas creencias es una hipótesis — y puede cuestionarse.
        </p>
        <p>
          El tercer paso es crear nuevas referencias. Busca mujeres que hayan alcanzado el tipo de éxito que temes y observa que sus vidas no se destruyeron. Su experiencia amplía lo que tu cerebro considera posible para ti.
        </p>
        <p>
          Y el cuarto, el más importante: da el paso de todas formas. La confianza no viene antes de la acción — viene de la acción. El único antídoto real al miedo es moverse con él presente.
        </p>
      </>
    ),
  },

  "conferencista-internacional-camino": {
    title: "Mi camino para convertirme en conferencista internacional",
    excerpt:
      "Cómo pasé de ser psicóloga local a conferencista en múltiples países. Sin atajos, solo trabajo y estrategia.",
    category: "Experiencias",
    date: "2026-03-18",
    content: (
      <>
        <p>
          No hay una fórmula secreta. No hubo un golpe de suerte que cambió todo de la noche a la mañana. Mi camino hacia las conferencias internacionales fue exactamente lo que parece: trabajo constante, aprendizaje continuo, y la disposición a empezar mucho más pequeño de lo que mi ego quería.
        </p>
        <p>
          Comencé hablando en grupos pequeños — reuniones de 15 o 20 personas donde nadie sabía quién era yo. Esos primeros escenarios eran incómodos. Las expectativas eran pocas. Y precisamente por eso eran perfectos: podía experimentar, cometer errores, encontrar mi voz.
        </p>
        <h2>El momento en que todo cambió</h2>
        <p>
          Durante años, la clave no fue "hacerse viral" ni tener el contacto perfecto. Fue esta convicción simple: <em>servir al nivel en el que estás, y el nivel siguiente encontrará su camino hacia ti.</em>
        </p>
        <p>
          Cada presentación que di, la di como si fuera la más importante de mi carrera. No por el escenario, sino por las personas que estaban en la sala. Esa actitud creó reputación antes de que yo tuviera un nombre conocido.
        </p>
        <h2>El papel de la mentoría</h2>
        <p>
          Ser mentoreada por Spencer Hoffmann cambió la trayectoria de mi carrera. No porque me haya dado un atajo, sino porque me mostró cómo piensan los que juegan a ese nivel. La mentoría te comprime el tiempo de aprendizaje — te evita años de errores que tu mentor ya cometió.
        </p>
        <p>
          Si hay algo que recomiendo a cualquier mujer que quiere proyectarse profesionalmente es esto: busca activamente mentores que estén donde tú quieres estar. No esperes que lleguen — ve a ellos, ofrece valor, muestra tu compromiso.
        </p>
        <h2>La preparación que nadie ve</h2>
        <p>
          Por cada hora en el escenario, hay muchas más de preparación. Investigar a la audiencia, adaptar el contenido, practicar la entrega, anticipar preguntas. Los mejores conferencistas hacen que parecer fácil sea el resultado de un trabajo invisible considerable.
        </p>
        <p>
          También hay un trabajo interno permanente: mantener la claridad en tu mensaje, seguir aprendiendo, no dejar que el éxito produzca complacencia ni el fracaso produzca abandono.
        </p>
        <h2>Lo que me llevó a otros países</h2>
        <p>
          Irónicamente, lo que abrió puertas internacionales no fue buscarlas activamente. Fue construir autoridad local tan sólida que la visibilidad trascendió fronteras naturalmente. Cuando tu contenido genuinamente transforma vidas, esas personas lo comparten. Ese compartir orgánico es el mejor marketing que existe.
        </p>
        <p>
          Si estás al principio de este camino, mi mensaje es este: sé paciente con el proceso pero implacable con tu desarrollo. Aparece consistentemente, sirve profundamente, y mantén la humildad de seguir aprendiendo. El escenario que imaginas está más cerca de lo que crees — pero requiere que construyas los cimientos primero.
        </p>
      </>
    ),
  },

  "viaje-sola-mujer-consejos": {
    title: "Viajar sola siendo mujer: mi guía completa",
    excerpt:
      "Después de 50 países, comparto mis mejores consejos de seguridad, mentalidad y libertad para mujeres viajeras.",
    category: "Viajes",
    date: "2026-03-10",
    content: (
      <>
        <p>
          La primera vez que viajé sola tenía miedo. No el miedo dramático de las películas, sino ese miedo suave pero persistente de: ¿y si algo sale mal? ¿y si me pierdo? ¿y si no puedo? Más de 50 países después, puedo decirte que ese miedo nunca desaparece completamente — pero se transforma. Deja de ser parálisis y se convierte en alerta. Y esa diferencia lo cambia todo.
        </p>
        <h2>La mentalidad primero</h2>
        <p>
          Antes de hablar de logística, hablemos de lo que realmente determina si un viaje solo funciona: la mentalidad. Viajar sola requiere cultivar una confianza en ti misma que no depende de que todo salga perfecto — sino de saber que puedes manejar lo que no sale perfecto.
        </p>
        <p>
          Eso se construye empezando pequeño. Tu primera experiencia de viaje sola no tiene que ser Japón o Marruecos. Puede ser una ciudad dentro de tu país que nunca has visitado. Un fin de semana en un lugar accesible. Cada experiencia exitosa — y también cada dificultad superada — construye el músculo de la autoconfianza viajera.
        </p>
        <h2>Seguridad real vs. miedo paralizante</h2>
        <p>
          Hay una diferencia entre precauciones inteligentes y miedo que te impide vivir. La seguridad real incluye: investigar el destino con fuentes confiables, compartir tu itinerario con alguien de confianza, tener copias de documentos importantes, mantener el celular cargado, confiar en tu instinto.
        </p>
        <p>
          Y el instinto — eso que la psicología llama procesamiento intuitivo — es una de tus mejores herramientas. Si una situación se siente mal, no necesitas justificarlo racionalmente: sal de ahí.
        </p>
        <h2>La libertad que nadie te enseña</h2>
        <p>
          Lo que nadie te dice antes de tu primer viaje solo es esto: la libertad de ir donde quieres cuando quieres, de cambiar de plan sin consultar a nadie, de comer lo que tú quieres a la hora que tú quieres — esa libertad es una de las experiencias más expansivas que existe.
        </p>
        <p>
          Viajar sola también te conecta con las personas de una manera diferente. Cuando estás sola, eres más accesible. Las conversaciones con extraños se dan más fácilmente. He hecho conexiones en viajes solitarios que se convirtieron en amistades de años.
        </p>
        <h2>Consejos prácticos de mis 50+ países</h2>
        <p>
          Siempre llego de día a un destino nuevo cuando puedo. Siempre tengo efectivo local de emergencia. Siempre aprendo al menos cinco frases en el idioma local — el intento genuino de hablar la lengua local abre corazones en todas partes del mundo.
        </p>
        <p>
          Y esto que puede sonar contraintuitivo: conéctate menos con tu teléfono y más con tu entorno. Las mejores experiencias de mis viajes no las documenté — las viví completamente. Y esos son los momentos que permanecen.
        </p>
        <h2>El viaje que te cambia</h2>
        <p>
          Viajar sola te devuelve a ti misma de maneras que no anticipas. Sin el espejo de la opinión de otros, empiezas a notar quién eres realmente — qué te gusta, qué te molesta, qué te llena, qué te vacía. Es uno de los ejercicios más honestos de autoconocimiento que conozco.
        </p>
        <p>
          Si estás considerando hacerlo — hazlo. No cuando estés "lista". No cuando tengas el viaje perfecto planificado. Empieza con un paso. Ese primer paso siempre es el más difícil y el más importante.
        </p>
      </>
    ),
  },

  "liderar-desde-la-autenticidad": {
    title: "Liderazgo femenino: liderar desde la autenticidad",
    excerpt:
      "El liderazgo más poderoso no viene de imitar a otros, sino de liderar siendo completamente tú misma.",
    category: "Liderazgo",
    date: "2026-03-03",
    content: (
      <>
        <p>
          Durante décadas, el modelo de liderazgo dominante fue diseñado por hombres, para hombres, en contextos históricamente masculinos. Y durante décadas, a las mujeres que querían liderar se les dijo — implícita o explícitamente — que tenían que adaptarse a ese modelo: ser más asertivas, más directas, menos emocionales, más "ejecutivas."
        </p>
        <p>
          El resultado fue una generación de líderes femeninas que lideraban con una máscara. Competentes, sí. Exitosas, a menudo. Pero exhaustas de sostener una forma de ser que no era la suya. Y cuando la máscara cae — y siempre cae — el costo es alto.
        </p>
        <h2>¿Qué es liderar desde la autenticidad?</h2>
        <p>
          Liderar desde la autenticidad no significa liderar sin estrategia ni estructura. Significa que tu liderazgo emerge de tus valores reales, no de lo que crees que un líder debe ser. Significa que tu forma de motivar, de comunicar, de tomar decisiones — está alineada con quien verdaderamente eres.
        </p>
        <p>
          Y paradójicamente, ese liderazgo auténtico genera más confianza, más lealtad y más resultados que el liderazgo de fachada. Porque las personas siguen a quienes perciben como reales. Podemos detectar la autenticidad — o su ausencia — de manera casi instintiva.
        </p>
        <h2>El liderazgo femenino no necesita ser "como el masculino"</h2>
        <p>
          Las investigaciones en liderazgo organizacional de las últimas dos décadas son claras: los estilos de liderazgo históricamente asociados con las mujeres — transformacional, colaborativo, orientado a las relaciones — producen resultados superiores en entornos complejos y en equipos diversos.
        </p>
        <p>
          Eso no significa que las mujeres no puedan ser directas o decisivas — puede y deben serlo cuando la situación lo requiere. Significa que no tienen que abandonar su naturaleza para ser efectivas. La integración es más poderosa que la imitación.
        </p>
        <h2>Los pilares del liderazgo auténtico</h2>
        <p>
          <strong>Autoconocimiento profundo:</strong> Sabes cuáles son tus valores no negociables, tus fortalezas genuinas, tus puntos ciegos. Y no te asustas de ninguno de ellos.
        </p>
        <p>
          <strong>Comunicación desde la verdad:</strong> Dices lo que piensas — con tacto, con consideración, pero sin distorsionar tu perspectiva para que otros se sientan cómodos.
        </p>
        <p>
          <strong>Vulnerabilidad estratégica:</strong> Sabes cuándo mostrar que no sabes todo, que cometiste un error, que necesitas apoyo. Eso no disminuye tu autoridad — la construye, porque humaniza el liderazgo.
        </p>
        <p>
          <strong>Propósito como brújula:</strong> Tus decisiones están guiadas por algo más grande que los resultados trimestrales — por un propósito claro que le da coherencia a tu liderazgo a largo plazo.
        </p>
        <h2>El trabajo que nadie menciona</h2>
        <p>
          Liderar auténticamente requiere, primero, conocerte auténticamente. Y eso es trabajo — trabajo real, incómodo, continuo. Requiere cuestionarte creencias que llevas años dando por sentadas, enfrentar patrones que te han "servido" pero que en realidad te limitan.
        </p>
        <p>
          Pero el resultado de ese trabajo no tiene precio: un liderazgo que no te agota porque emerge de quien realmente eres. Un liderazgo que se sostiene en el tiempo porque tiene raíces profundas. Un liderazgo que transforma — porque primero te transformó a ti.
        </p>
      </>
    ),
  },

  "elegirme-sin-miedo-libro-historia": {
    title: "La historia detrás de 'Elegirme sin miedo'",
    excerpt:
      "Por qué escribí este libro, qué significa para mí, y por qué creo que puede cambiar la vida de millones de mujeres.",
    category: "Libro",
    date: "2026-02-25",
    content: (
      <>
        <p>
          Escribir un libro es uno de los actos más vulnerables que conozco. No porque sea técnicamente difícil — aunque lo es — sino porque implica poner en palabras algo que llevas años sintiendo, pensando, viviendo, y entregárselo al mundo sin saber cómo será recibido.
        </p>
        <p>
          <em>Elegirme sin miedo</em> nació de años de trabajo — conmigo misma primero, con mis clientes después. De conversaciones que empezaban con "es que yo no puedo", "es que yo no merezco", "es que ellos necesitan que yo…" Y que terminaban, meses después, con una mujer que se había descubierto capaz de cosas que antes creía imposibles.
        </p>
        <h2>El momento en que supe que tenía que escribirlo</h2>
        <p>
          Hubo una conversación específica. Una cliente — inteligente, generosa, extraordinaria en tantos sentidos — que me dijo algo que me llegó hasta el fondo: "Nunca se me había ocurrido que yo podía elegirme. Creía que priorizarme era malo."
        </p>
        <p>
          Cuando escuché eso, supe que lo que habíamos trabajado juntas no podía quedarse en esa sala. Que había millones de mujeres con esa misma creencia, que nadie les había dado permiso de cuestionarla. Y quise ser esa voz.
        </p>
        <h2>Lo que encontrarás en el libro</h2>
        <p>
          No es un libro de autoayuda en el sentido superficial. No es "piensa positivo y todo estará bien." Es un libro honesto sobre el proceso real de aprender a elegirte — con sus resistencias, sus miedos, sus retrocesos y sus victorias.
        </p>
        <p>
          Combina herramientas de psicología positiva y cognitivo-conductual con experiencias personales y de viaje, y con ejercicios prácticos que puedes aplicar desde el primer capítulo. La teoría es el andamiaje — la práctica es donde ocurre el cambio real.
        </p>
        <h2>Por qué "sin miedo" y no "sin esfuerzo"</h2>
        <p>
          Elegí esas palabras con intención. "Sin esfuerzo" sería una mentira — este proceso requiere trabajo, requiere incomodidad, requiere querer cuando no quieres. "Sin miedo" también sería una mentira si significara que el miedo desaparece. Pero el título es una invitación: a elegirte <em>a pesar</em> del miedo. Con el miedo presente. Sin dejar que el miedo tenga la última palabra.
        </p>
        <h2>Lo que espero que haga en ti</h2>
        <p>
          Espero que cuando termines de leerlo, la pregunta "¿Me estoy eligiendo?" sea parte de tu vida cotidiana. Que tengas herramientas concretas para responderla. Que la culpa de priorizarte se haya hecho más pequeña. Que lo que antes te parecía imposible ahora parezca solo difícil — y difícil, lo sabemos, es superable.
        </p>
        <p>
          Escribir este libro fue elegirme. Te invito a leerlo y hacer lo mismo.
        </p>
      </>
    ),
  },

  "inteligencia-emocional-mujeres": {
    title: "Inteligencia emocional: la habilidad del siglo XXI",
    excerpt:
      "Por qué la inteligencia emocional es la competencia más valiosa del siglo XXI y cómo desarrollarla.",
    category: "Psicología",
    date: "2026-02-18",
    content: (
      <>
        <p>
          En 1995, Daniel Goleman publicó su libro seminal sobre inteligencia emocional y cambió la conversación sobre el éxito humano para siempre. Demostró, con evidencia, que el coeficiente intelectual explica solo una fracción del éxito en la vida real — y que la inteligencia emocional explica mucho más.
        </p>
        <p>
          Casi tres décadas después, en un mundo de automatización, inteligencia artificial y complejidad sin precedentes, la inteligencia emocional es más valiosa que nunca. Las máquinas pueden procesar datos. No pueden leer una sala, navigar conflictos relacionales, motivar a un equipo en crisis, o conectar genuinamente con otro ser humano.
        </p>
        <h2>Los cinco componentes de la IE</h2>
        <p>
          <strong>Autoconciencia:</strong> La capacidad de reconocer tus propias emociones mientras ocurren — no en retrospectiva, sino en tiempo real. ¿Sabes cuándo estás ansiosa antes de que la ansiedad tome el control? Esa es autoconciencia.
        </p>
        <p>
          <strong>Autoregulación:</strong> La capacidad de gestionar tus respuestas emocionales. No suprimirlas — gestionarlas. Hay una diferencia enorme entre tragarte un enojo hasta que explota, y procesarlo y decidir conscientemente cómo responder.
        </p>
        <p>
          <strong>Motivación intrínseca:</strong> El impulso interno que no depende de recompensas externas. Las personas con alta IE se mueven por propósito, por curiosidad, por el placer del crecimiento — no solo por el salario o el reconocimiento.
        </p>
        <p>
          <strong>Empatía:</strong> La capacidad de sentir y entender las emociones de otros. No es acuerdo — puedes entender por qué alguien siente lo que siente sin necesariamente validar sus acciones. La empatía es información, no debilidad.
        </p>
        <p>
          <strong>Habilidades sociales:</strong> La capacidad de navigar relaciones, manejar conflictos, influir, inspirar y comunicar con efectividad. Estas habilidades son el puente entre el mundo interno y el mundo externo.
        </p>
        <h2>Cómo desarrollar tu inteligencia emocional</h2>
        <p>
          La buena noticia — confirmada por la neurociencia moderna — es que la IE se puede desarrollar. No es un rasgo fijo. Es una habilidad que se cultiva con práctica.
        </p>
        <p>
          Empieza con la autoconciencia: durante una semana, cada vez que sientas una emoción fuerte, ponle nombre. No "me siento mal" — sino "estoy ansiosa", "estoy decepcionada", "estoy resentida". Nombrar las emociones con precisión activa la corteza prefrontal (el cerebro racional) y reduce la intensidad emocional. Es lo que los neurocientíficos llaman "afecto labeling" y tiene efectos comprobados.
        </p>
        <p>
          Para la empatía: practica escuchar sin preparar tu respuesta. Cuando alguien te habla, pon tu atención completamente en entender su experiencia, no en formular lo que vas a decir. Esa sola práctica transforma relaciones.
        </p>
        <h2>IE y éxito profesional</h2>
        <p>
          Los datos son contundentes: las personas con alta inteligencia emocional tienen salarios más altos, lideran equipos más efectivos, tienen relaciones de trabajo más satisfactorias y avanzan más rápidamente en sus carreras. No porque evitan los conflictos — sino porque los navegan mejor.
        </p>
        <p>
          En un mundo donde la automatización amenaza trabajos técnicos, la IE es el diferenciador humano irreemplazable. Invertir en ella no es "soft skill" optativo — es la estrategia de carrera más inteligente del siglo XXI.
        </p>
      </>
    ),
  },

  "mentor-spencer-hoffmann-lecciones": {
    title: "Lo que aprendí de mi mentor Spencer Hoffmann",
    excerpt:
      "Ser mentoreada por uno de los mejores del mundo cambia tu perspectiva. Estas son las lecciones que transformaron mi carrera.",
    category: "Mentoría",
    date: "2026-02-10",
    content: (
      <>
        <p>
          Hay personas que entran a tu vida y la reorganizan. No porque te cambien — sino porque te muestran con claridad meridiana quién ya eres y a qué podrías llegar. Spencer Hoffmann fue esa persona para mí en el mundo del liderazgo y el desarrollo humano.
        </p>
        <p>
          La mentoría no es una conversación ocasional de inspiración. La mentoría real es un proceso exigente de cuestionamiento, expansión, y a veces, incomodidad deliberada. Es alguien que tiene el mapa de un territorio que tú apenas estás comenzando a explorar, y que tiene la generosidad y el criterio de compartirlo.
        </p>
        <h2>Lección 1: Tu estándar personal lo determinas tú</h2>
        <p>
          Una de las primeras cosas que Spencer me hizo ver fue que yo tenía un estándar interno más bajo que mis capacidades reales. No por falta de ambición — sino por creencias no examinadas sobre lo que era "razonable" esperar de mí misma. La mentoria me retó a subir ese estándar. Y la distancia entre quien eras antes de ese reto y quien eres después es considerable.
        </p>
        <h2>Lección 2: La excelencia es un hábito, no un talento</h2>
        <p>
          Los mejores en cualquier campo no son necesariamente los más talentosos — son los más consistentes. La excelencia es el resultado de hábitos pequeños, repetidos con intención, durante mucho tiempo. Este principio suena simple y es profundamente contracultural en un mundo que glorifica el golpe de suerte y el éxito instantáneo.
        </p>
        <h2>Lección 3: Tu red es tu recurso más valioso</h2>
        <p>
          No en el sentido superficial de "networking" — sino en el sentido profundo de que las personas con quienes te rodeas moldean tu pensamiento, tus posibilidades y tu crecimiento. Invertir en relaciones auténticas con personas que te desafíen e inspiren no es opcional — es estratégico.
        </p>
        <h2>Lección 4: Aprende de todos, no solo de los que admiras</h2>
        <p>
          Algunos de mis aprendizajes más valiosos vienen de observar qué no hacer. De personas cuyo estilo de liderazgo o comunicación producía resultados negativos. La claridad sobre lo que no quieres ser es tan valiosa como la claridad sobre lo que quieres ser.
        </p>
        <h2>Lección 5: El servicio genuino es la mejor estrategia de negocio</h2>
        <p>
          En un mundo saturado de estrategias de marketing, la diferenciación más poderosa es la más simple: transformar genuinamente la vida de las personas que te contratan o compran tu libro o asisten a tu conferencia. Cuando tu trabajo cambia vidas reales, el crecimiento es inevitable porque es orgánico.
        </p>
        <h2>Sobre la mentoría en general</h2>
        <p>
          Si estás buscando un mentor, mi consejo es este: no busques al más famoso. Busca al que tiene la experiencia específica que tú necesitas, y cuyo código de valores sea compatible con el tuyo. Una mentoría poderosa tiene química, confianza y desafío — sin esos tres elementos, es solo asesoría.
        </p>
        <p>
          Y cuando encuentres a esa persona: sé humilde, sé receptiva, y aplica lo que te dice. La mentoría no funciona si la escuchas y no la implementas. El honor al mentor es la acción.
        </p>
      </>
    ),
  },

  "proposito-de-vida-encontrar": {
    title: "Cómo encontrar tu propósito de vida en 5 pasos",
    excerpt:
      "El propósito no se inventa, se descubre. Una guía práctica basada en psicología y crecimiento personal.",
    category: "Crecimiento Personal",
    date: "2026-02-03",
    content: (
      <>
        <p>
          "¿Cuál es mi propósito de vida?" Es una de las preguntas más comunes que escucho — y también una de las más malentendidas. La mayoría de las personas la aborda como si el propósito fuera algo externo que hay que encontrar, como si estuviera escondido en algún lugar esperando a ser descubierto.
        </p>
        <p>
          La verdad, según la psicología y según mi experiencia trabajando con cientos de personas, es diferente: el propósito no se inventa, no se impone, y tampoco está en algún lugar esperando que lo encuentres. El propósito se descubre a través del proceso de vivir conscientemente y prestar atención a lo que ya estás haciendo cuando te sientes más viva.
        </p>
        <h2>Paso 1: Identifica tus zonas de flujo</h2>
        <p>
          El concepto de "flow" o flujo, desarrollado por el psicólogo Mihaly Csikszentmihalyi, describe esos momentos en los que estás tan absorbida en una actividad que el tiempo pasa diferente, el esfuerzo se vuelve placentero, y te sientes más viva que en cualquier otro momento. ¿Cuándo entras en ese estado? ¿Qué actividades lo provocan? Ahí hay una pista sobre tu propósito.
        </p>
        <h2>Paso 2: Sigue el hilo de lo que te indigna</h2>
        <p>
          La indignación no es siempre negativa — a menudo apunta hacia algo que te importa profundamente. ¿Qué injusticias no puedes ignorar? ¿Qué problemas del mundo te parecen inaceptables? El propósito frecuentemente vive en la intersección entre tus talentos y los problemas que más te duelen ver sin solución.
        </p>
        <h2>Paso 3: Revisa tu historia con ojos nuevos</h2>
        <p>
          Tus experiencias más difíciles a menudo contienen las semillas de tu propósito. Lo que has superado, lo que has aprendido, lo que te transformó — eso te da autoridad y empatía únicos para ayudar a otros en situaciones similares. Tu historia no es un accidente: es material.
        </p>
        <h2>Paso 4: Experimenta antes de decidir</h2>
        <p>
          El propósito no se revela en el silencio de la meditación — aunque eso puede ayudar. Se revela en la acción. Prueba cosas. Voluntariza en una causa. Enseña lo que sabes. Crea algo. Cada experimento te da datos sobre lo que resuena y lo que no. La exploración activa es el método más eficiente para encontrar tu propósito.
        </p>
        <h2>Paso 5: Acepta que el propósito evoluciona</h2>
        <p>
          Una de las trampas más comunes es buscar el propósito definitivo, el único, el permanente. Pero el propósito es un ser vivo que crece contigo. Lo que te llama a los 25 puede no ser lo que te llama a los 45. Y eso no es fracaso — es madurez.
        </p>
        <p>
          Lo que sí permanece es la dirección: servir, crecer, contribuir de alguna manera significativa. Los detalles de cómo lo haces pueden cambiar. La esencia — esa que emerge cuando te preguntas honestamente "¿para qué estoy aquí?" — esa suele tener una coherencia que trasciende los capítulos de tu vida.
        </p>
        <h2>Una última verdad</h2>
        <p>
          El propósito no está en espera de que lo descubras para empezar a vivir. Puedes vivir con propósito ahora mismo — en cómo tratas a las personas que te rodean, en la calidad de atención que llevas a tu trabajo, en el modo en que cuidas tu mundo interior. El propósito grande se construye de presencias pequeñas, repetidas con intención.
        </p>
      </>
    ),
  },
};

// ─── Static params ─────────────────────────────────────────────────────────

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleContent[slug];

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://heiddyawais.com/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["Heiddy Awais"],
      url: `https://heiddyawais.com/blog/${slug}`,
    },
  };
}

// ─── Helper ────────────────────────────────────────────────────────────────

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getRelatedPosts(currentSlug: string) {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);
}

// ─── Page component ────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleContent[slug];

  if (!article) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://heiddyawais.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://heiddyawais.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://heiddyawais.com/blog/${slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Heiddy Awais",
      url: "https://heiddyawais.com",
      jobTitle: "Psicóloga & Coach de Crecimiento Personal",
    },
    publisher: {
      "@type": "Organization",
      name: "Heiddy Awais",
      url: "https://heiddyawais.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://heiddyawais.com/blog/${slug}`,
    },
    keywords: article.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ARTICLE HEADER */}
      <section
        style={{
          background: "linear-gradient(135deg, #FAFAF8 0%, #F5EDE4 60%, #FAFAF8 100%)",
          paddingTop: "120px",
          paddingBottom: "64px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "32px" }}>
            <ol
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                listStyle: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                color: "var(--gray)",
              }}
            >
              <li>
                <Link href="/" style={{ color: "var(--gray)", textDecoration: "none" }}>
                  Inicio
                </Link>
              </li>
              <li style={{ color: "var(--gray-light)" }}>›</li>
              <li>
                <Link href="/blog" style={{ color: "var(--gray)", textDecoration: "none" }}>
                  Blog
                </Link>
              </li>
              <li style={{ color: "var(--gray-light)" }}>›</li>
              <li style={{ color: "var(--rose-gold-dark)", fontWeight: 500 }}>
                {article.category}
              </li>
            </ol>
          </nav>

          {/* Category badge */}
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--rose-gold-dark)",
                border: "1px solid rgba(196,149,106,0.4)",
                background: "var(--rose-gold-pale)",
                padding: "4px 14px",
                borderRadius: "40px",
              }}
            >
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 700,
              color: "var(--dark)",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            {article.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              color: "var(--gray)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            {article.excerpt}
          </p>

          {/* Author byline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              paddingTop: "24px",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--rose-gold), var(--rose-gold-dark))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: "var(--white)",
                  fontSize: "1rem",
                }}
              >
                HA
              </span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--dark)",
                }}
              >
                Heiddy Awais
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  color: "var(--gray)",
                }}
              >
                Psicóloga & Coach · <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section style={{ padding: "64px 24px 80px", background: "var(--white)" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.0625rem",
            color: "var(--dark-soft)",
            lineHeight: 1.85,
          }}
          className="ha-article-body"
        >
          {article.content}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "64px 24px",
          background: "var(--rose-gold-pale)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--rose-gold)",
              marginBottom: "16px",
            }}
          >
            ¿Quieres profundizar?
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              fontWeight: 600,
              color: "var(--dark)",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Trabajemos juntas en tu{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
              transformación personal
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--gray)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Los artículos abren la conversación. El coaching individual es donde ocurre el cambio real.
            Si este artículo resonó contigo, da el siguiente paso.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--rose-gold)",
                color: "var(--white)",
                padding: "14px 28px",
                borderRadius: "8px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Contáctame →
            </Link>
            <a
              href="https://wa.me/15859789655"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--white)",
                color: "var(--dark)",
                padding: "14px 28px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section style={{ padding: "64px 24px 80px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.75rem",
              fontWeight: 600,
              color: "var(--dark)",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Artículos relacionados
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "28px",
            }}
            className="ha-blog-grid"
          >
            {relatedPosts.map((post) => (
              <article
                key={post.slug}
                style={{
                  background: "var(--white)",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--rose-gold-dark)",
                    border: "1px solid rgba(196,149,106,0.4)",
                    background: "var(--rose-gold-pale)",
                    padding: "3px 10px",
                    borderRadius: "40px",
                    alignSelf: "flex-start",
                  }}
                >
                  {post.category}
                </span>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--dark)",
                    lineHeight: 1.3,
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {post.title}
                  </Link>
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--gray)",
                    lineHeight: 1.65,
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--rose-gold)",
                    textDecoration: "none",
                  }}
                >
                  Leer más →
                </Link>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "var(--dark)",
                padding: "12px 28px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              ← Leer más artículos
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .ha-article-body p {
          margin-bottom: 1.5rem;
        }
        .ha-article-body h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.625rem;
          font-weight: 600;
          color: var(--dark);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .ha-article-body strong {
          color: var(--dark);
          font-weight: 600;
        }
        .ha-article-body em {
          color: var(--rose-gold-dark);
        }
        @media (max-width: 768px) {
          .ha-blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

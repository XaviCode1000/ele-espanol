/* Datos de tareas del dossier (transcripción verbatim desde index.html original) */
export const TASKS={
/* ---------- SONIDOS ---------- */
's1_2':{type:'choice',t:'1.2 Pares mínimos /p/ ~ /b/',c:'Elige la palabra correcta. Mano delante de la boca: <b>/p/</b> sopla aire, <b>/b/</b> no sopla y vibra la garganta.',items:[
 {q:'Mi ___ es médico.',o:['padre','badre'],a:0,r:'/p/ en <i>padre</i>; "badre" no existe.'},
 {q:'La comida de este restaurante tiene poco ___.',o:['peso','beso'],a:0,r:'peso = cantidad que pesa algo.'},
 {q:'En la fiesta vamos a ___.',o:['pailar','bailar'],a:1,r:'"pailar" no existe en español.'},
 {q:'El ___ está en el horno con patatas.',o:['pollo','bollo'],a:0,r:'pollo (con /p/) = comida; bollo = panecillo.'},
 {q:'Marta da un ___ a su abuela.',o:['peso','beso'],a:1,r:'beso (con /b/) = muestra de cariño.'},
 {q:'Compramos un ___ de naranjas.',o:['kilo','bilo'],a:0,r:'kilo se escribe con K y suena /p/… no: suena /k/.'}]},

's1_3':{type:'choice',t:'1.3 Diptongos ie / ue (foco arabófono)',c:'Los diptongos <b>ie</b> y <b>ue</b> no existen en árabe: no los reduzcáis a una sola vocal. Elige la forma correcta.',items:[
 {q:'Yo ___ aprender español.',o:['quiero','quero'],a:0,r:'querer → qu<b>ie</b>ro (e → ie).'},
 {q:'Mi hermano ___ a las ocho.',o:['viene','vene'],a:0,r:'venir → v<b>ie</b>ne.'},
 {q:'Yo me ___ el café en el microondas.',o:['caliento','calento'],a:0,r:'calentar → cal<b>ie</b>nto.'},
 {q:'Nosotros ___ en Madrid.',o:['vivimos','vivemos'],a:0,r:'vivir es -IR regular: no diptonga.'},
 {q:'Ellos ___ dos hijos.',o:['tienen','tenen'],a:0,r:'tener → t<b>ie</b>nen.'},
 {q:'La puerta del salón es ___ .',o:['nueva','neva'],a:0,r:'nuevo conserva el diptongo ue.'}]},

's1_4':{type:'syll',t:'1.4 La sílaba fuerte (el acento léxico)',c:'Haz clic en la sílaba tónica. <b>Regla:</b> termina en vocal, -n o -s → penúltima; otra consonante → última; si lleva tilde, manda la tilde.',items:[
 {w:'familia',s:['fa','mi','lia'],a:1},{w:'médico',s:['mé','di','co'],a:0},{w:'español',s:['es','pa','ñol'],a:2},
 {w:'mesa',s:['me','sa'],a:0},{w:'reloj',s:['re','loj'],a:1},{w:'miércoles',s:['miér','co','les'],a:1},
 {w:'hermano',s:['her','ma','no'],a:1},{w:'cumpleaños',s:['cum','ple','a','ños'],a:2},
 {w:'Casablanca',s:['ca','sa','blan','ca'],a:2},{w:'café',s:['ca','fé'],a:1},
 {w:'autobús',s:['au','to','bús'],a:2},{w:'profesora',s:['pro','fe','so','ra'],a:2}]},

's1_6':{type:'choice',t:'1.6 Elige la grafía correcta (c · qu · k · z · s · h)',c:'Selecciona la letra o el grupo que completa la palabra.',items:[
 {q:'El ___afé de mi padre está muy caliente.',o:['c','k','z'],a:0,r:'CA = /ka/ fuerte.'},
 {q:'Mañana voy al ___ine a las siete.',o:['c','k','s'],a:0,r:'CI = suave (/θ/ o /s/).'},
 {q:'Necesito un ___ilo de naranjas.',o:['c','k','qu'],a:1,r:'KILO: palabra con K, sonido /k/.'},
 {q:'La ___asa de mi familia es grande.',o:['c','z','s'],a:0,r:'CA = /ka/.'},
 {q:'El número ___ero empieza por esa letra.',o:['c','s','z'],a:0,r:'CE = suave.'},
 {q:'El ___ol ilumina la ventana.',o:['c','s','z'],a:1,r:'SOL se escribe con S.'},
 {q:'Yo ___iero aprender español.',o:['c','qu','k'],a:1,r:'Delante de I, el sonido /k/ necesita QU.'},
 {q:'Mi hermano come mucho ___ueso.',o:['c','qu','h'],a:2,r:'HUESO: la H es muda.'},
 {q:'Mi prima tiene die___ años.',o:['s','z','c'],a:1,r:'DIEZ termina en Z.'},
 {q:'Vivimos en Zara___o___a.',o:['g','z','s'],a:1,r:'ZARAGOZA con Z (sonido suave).'}]},

's1_7':{type:'spell',t:'1.7 Deletreo profesional',c:'Escribe el deletreo letra a letra, separado por guiones o espacios. Ejemplo: <b>MANO → eme-a-ene-o</b>.',items:[
 {w:'APELLIDO',a:['a','pe','ele','ele','ele','i','de','o']},
 {w:'MÉDICO',a:['eme','e','de','i','ce','o']},
 {w:'FRANCESA',a:['efe','erre','a','ene','ce','e','ese','a']},
 {w:'CORREO',a:['ce','o','erre','erre','e','o']},
 {w:'CUMPLEAÑOS',a:['ce','u','eme','pe','ele','e','a','eñe','o','ese']},
 {w:'QUIERO',a:['cu','u','i','e','erre','o']},
 {w:'ZAPATO',a:['zeta','a','pe','a','te','o']},
 {w:'HERMANO',a:['hache','e','erre','eme','a','ene','o']}]},

/* ---------- IDENTIDAD ---------- */
'i2_1':{type:'fill',grid:3,t:'2.1 Recupera la tabla de memoria',c:'Escribe las formas de <b>SER</b> y <b>LLAMARSE</b> sin mirar la Caja de Herramientas.',items:[
 {q:'yo · SER',a:'soy'},{q:'yo · LLAMARSE',a:'me llamo'},{q:'tú · SER',a:'eres'},
 {q:'tú · LLAMARSE',a:'te llamas'},{q:'él/ella/usted · SER',a:'es'},{q:'él/ella/usted · LLAMARSE',a:'se llama'},
 {q:'nosotros/as · SER',a:'somos'},{q:'nosotros/as · LLAMARSE',a:'nos llamamos'},
 {q:'vosotros/as · SER',a:'sois'},{q:'vosotros/as · LLAMARSE',a:'os llamáis'},
 {q:'ellos/ustedes · SER',a:'son'},{q:'ellos/ustedes · LLAMARSE',a:'se llaman'}]},

'i2_2':{type:'fill',t:'2.2 Sustituye el sujeto y conjuga SER',c:'Escribe el pronombre + la forma correcta del verbo.',items:[
 {q:'[Karim y yo] ___ de Marruecos.',a:'somos',acc:['nosotros somos']},
 {q:'[Amina y Sarah] ___ abogadas en Casablanca.',a:'son',acc:['ellas son']},
 {q:'[El señor Ramírez] ___ el nuevo vecino del edificio.',a:'es',acc:['él es']},
 {q:'[Tú y tu hermano] ___ muy atentos con la familia.',a:'sois',acc:['vosotros sois']},
 {q:'[La señora Dupont] Ella ___ la profesora de francés.',a:'es'},
 {q:'[Mi madre] ___ una persona muy trabajadora.',a:'es',acc:['ella es']},
 {q:'[Yo] ___ estudiante de español.',a:'soy',acc:['yo soy']},
 {q:'[Usted] ___ muy amable, señor.',a:'es',acc:['usted es']}]},

'i2_3':{type:'fill',t:'2.3 Nacionalidades: concordancia masc. / fem.',c:'Completa con la forma correcta del adjetivo de nacionalidad.',items:[
 {q:'Mi padre es de Francia: es ___.',a:'francés',acc:['frances']},
 {q:'Mi madre es de Francia: es ___.',a:'francesa'},
 {q:'Yo soy de Marruecos: soy ___.',a:'marroquí',acc:['marroqui']},
 {q:'Mi hermana es de España: es ___.',a:'española',acc:['espanola']},
 {q:'Nosotros somos de Siria: somos ___.',a:'sirios'},
 {q:'Ellas son de Italia: son ___.',a:'italianas'},
 {q:'¿Tú eres de México? Sí, soy ___.',a:'mexicano'},
 {q:'Los vecinos son de Argelia: son ___.',a:'argelinos'}]},

'i2_4':{type:'select',t:'2.4 Caza-artículos: marca donde el artículo SOBRA',c:'Haz clic en las frases incorrectas. Recuerda: <b>profesión sin artículo</b> (calco del francés <i>je suis un professeur</i>).',sel:'Marcar como incorrecta',items:[
 {t:'Soy un ingeniero.',s:true},{t:'Ella es una médica.',s:true},{t:'Somos unos estudiantes.',s:true},
 {t:'Mi padre es un profesor.',s:true},{t:'¿Usted es una abogada?',s:true},{t:'Ellos son unos médicos.',s:true},
 {t:'Mi hermana es una francesa.',s:false},{t:'Yo soy un cocinero.',s:true},{t:'Es un enfermero.',s:true},
 {t:'Somos unas personas trabajadoras.',s:false}]},

'i2_5':{type:'err',t:'2.5 Clínica de errores (árabe y francés → español)',c:'Escribe la frase corregida. Después verás la regla y el origen del error.',items:[
 {w:'Yo un ingeniero informático muy preparado.',a:'Yo soy ingeniero informático muy preparado.',r:'Falta el verbo copulativo <b>ser</b> (calco de la oración nominal árabe) y la profesión va sin artículo.',acc:['yo soy ingeniero informático muy preparado']},
 {w:'Mi hermana es una médica en el hospital central.',a:'Mi hermana es médica en el hospital central.',r:'Artículo indebido con profesión (calco del francés <i>une médecin</i>).',acc:['mi hermana es medica en el hospital central']},
 {w:'Él profesor de español en la universidad.',a:'Él es profesor de español en la universidad.',r:'Omisión del verbo <b>ser</b>.',acc:['el es profesor de español en la universidad','él es profesor de español en la universidad']},
 {w:'Yo marroquí y mi mujer francesa.',a:'Yo soy marroquí y mi mujer es francesa.',r:'En español el verbo <b>ser</b> es obligatorio en las dos partes.',acc:['yo soy marroqui y mi mujer es francesa']},
 {w:'Cómo te llamas tú?',a:'¿Cómo te llamas tú?',r:'Falta el signo de apertura <b>¿</b>, obligatorio en español.',acc:['como te llamas tu']},
 {w:'Mi Hermano es Alto y Moreno.',a:'Mi hermano es alto y moreno.',r:'Mayúsculas solo en inicio de frase y nombres propios: el árabe no distingue mayúsculas/minúsculas.',acc:['mi hermano es alto y moreno']},
 {w:'Nosotros somos unos estudiantes de primer nivel.',a:'Nosotros somos estudiantes de primer nivel.',r:'Artículo indeterminado plural innecesario con la profesión/condición.',acc:['nosotros somos estudiantes de primer nivel']},
 {w:'Badre es médico; su nombre es Paco.',a:'Padre es médico; su nombre es Paco.',r:'/p/ sustituido por /b/: el fonema /p/ no existe en el alfabeto árabe.',acc:['padre es medico su nombre es paco','padre es médico; su nombre es paco']}]},

/* ---------- VERBOS ---------- */
'v3_1':{type:'fill',t:'3.1 Texto integrado: presente regular',c:'Conjuga el verbo entre paréntesis en presente de indicativo.',items:[
 {q:'Mi familia y yo ___ (vivir) en Madrid desde hace un año.',a:'vivimos'},
 {q:'Todos los días nosotros ___ (comer) juntos a las tres.',a:'comemos'},
 {q:'Yo ___ (trabajar) en una empresa internacional.',a:'trabajo'},
 {q:'… y ___ (hablar) tres idiomas.',a:'hablo'},
 {q:'Mis hijos ___ (estudiar) en el colegio cercano.',a:'estudian'},
 {q:'… y ___ (escribir) sus tareas por la tarde.',a:'escriben'},
 {q:'Mi mujer ___ (beber) mucho café.',a:'bebe'},
 {q:'Mi mujer ___ (leer) el periódico por la noche.',a:'lee'},
 {q:'Y tú, ¿___ (comprender) bien esta lección?',a:'comprendes'}]},

'v3_2':{type:'fill',t:'3.2 QUERER (e → ie) y SER',c:'Aplica la diptongación y la flexión irregular.',items:[
 {q:'Mis hijos ___ (querer) aprender español para viajar.',a:'quieren'},
 {q:'Yo ___ (querer) un café con leche sin azúcar, por favor.',a:'quiero'},
 {q:'Nosotros ___ (ser) una familia muy unida.',a:'somos'},
 {q:'… y ___ (querer) hacer un viaje juntos.',a:'queremos',note:'Nosotros NO diptonga.'},
 {q:'¿Usted ___ (querer) hablar con el director?',a:'quiere'},
 {q:'¿Vosotros ___ (ser) los nuevos alumnos de la clase?',a:'sois'},
 {q:'Ella ___ (querer) mucho a su hermano pequeño.',a:'quiere'},
 {q:'Mis padres ___ (ser) médicos.',a:'son'}]},

'v3_3':{type:'fill',t:'3.3 Cambia el sujeto (nivel alto)',c:'Transforma la frase completa con el nuevo sujeto.',items:[
 {q:'Yo hablo francés. → Nosotros ___',a:'hablamos',acc:['nosotros hablamos']},
 {q:'Tú comes a las dos. → Vosotros ___',a:'coméis',acc:['comeis','vosotros coméis','vosotros comeis']},
 {q:'Ella vive en Lyon. → Ellas ___',a:'viven',acc:['ellas viven']},
 {q:'Yo quiero un té. → Mi hermano ___',a:'quiere',acc:['mi hermano quiere']},
 {q:'Nosotros somos marroquíes. → Yo ___',a:'soy marroquí',acc:['soy marroqui','yo soy marroquí','yo soy marroqui']},
 {q:'Tú eres médico. → Ustedes ___',a:'son médicos',acc:['son medicos','ustedes son médicos','ustedes son medicos']},
 {q:'Ellos escriben un correo. → Yo ___',a:'escribo un correo',acc:['escribo']},
 {q:'Vosotras habláis español. → Ella ___',a:'habla español',acc:['habla']}]},

/* ---------- OPUESTOS ---------- */
'o4_1':{type:'match',t:'4.1 Matriz de opuestos',c:'Escribe el antónimo de cada palabra.',items:[
 {w:'más',a:'menos'},{w:'grande',a:'pequeño',acc:['pequeno']},{w:'alto',a:'bajo'},
 {w:'mucho',a:'poco'},{w:'bueno',a:'malo'},{w:'rápido',a:'lento',acc:['rapido']},
 {w:'joven',a:'mayor'},{w:'caro',a:'barato',acc:['barata']},{w:'nuevo',a:'viejo'}]},

'o4_2':{type:'choice',t:'4.2 Elige: mucho / mucha / muchos / muchas',c:'Fíjate en el género y el número del sustantivo.',items:[
 {q:'En mi familia hay ___ personas: somos nueve.',o:['mucho','mucha','muchos','muchas'],a:3,r:'personas = femenino plural.'},
 {q:'Yo bebo ___ agua en verano.',o:['mucho','mucha','muchos','muchas'],a:1,r:'agua = femenino singular (aunque empiece por a- tónica).'},
 {q:'Mi hermano tiene ___ libros de gramática.',o:['mucho','mucha','muchos','muchas'],a:2,r:'libros = masculino plural.'},
 {q:'Hoy hace ___ calor en Casablanca.',o:['mucho','mucha','muchos','muchas'],a:0,r:'calor = masculino singular.'},
 {q:'No quiero ___ azúcar en el café, gracias.',o:['mucho','mucha','muchos','muchas'],a:1,r:'azúcar se usa sobre todo en femenino: mucha azúcar (también se acepta «mucho azúcar»).'},
 {q:'En la clase hay ___ estudiantes francesas.',o:['mucho','mucha','muchos','muchas'],a:3,r:'estudiantes francesas = femenino plural.'}]},

'o4_3':{type:'fill',t:'4.3 Concordancia: corrige el adjetivo',c:'Escribe solo la forma corregida del adjetivo.',items:[
 {q:'Mi madre es <s>trabajador</s>. →',a:'trabajadora'},
 {q:'Los zapatos nuevos son <s>caro</s>. →',a:'caros'},
 {q:'Mis hermanas son <s>alto</s>. →',a:'altas'},
 {q:'El café está frío; la sopa está <s>frío</s>. →',a:'fría',acc:['fria']},
 {q:'Nosotros somos <s>marroquí</s>. →',a:'marroquíes',acc:['marroquies']}]},

/* ---------- PREGUNTAS ---------- */
'q5_1':{type:'choice',t:'5.1 ¿Cuánto / Cuánta / Cuántos / Cuántas / Cuándo?',c:'Elige el interrogativo correcto según la concordancia o el sentido temporal.',items:[
 {q:'¿___ personas hay en la reunión de hoy?',o:['Cuánto','Cuánta','Cuántos','Cuántas','Cuándo'],a:3,r:'personas = femenino plural.'},
 {q:'¿___ es el examen final del Módulo 1?',o:['Cuánto','Cuánta','Cuántos','Cuántas','Cuándo'],a:4,r:'Pregunta por tiempo → cuándo.'},
 {q:'¿___ cuesta el libro de texto?',o:['Cuánto','Cuánta','Cuántos','Cuántas','Cuándo'],a:0,r:'Precio: masculino singular.'},
 {q:'¿___ agua bebes durante la clase?',o:['Cuánto','Cuánta','Cuántos','Cuántas','Cuándo'],a:1,r:'agua: femenino singular.'},
 {q:'¿___ es el cumpleaños de tu madre?',o:['Cuánto','Cuánta','Cuántos','Cuántas','Cuándo'],a:4,r:'Fecha → cuándo.'},
 {q:'¿___ hermanos tienes en tu familia?',o:['Cuánto','Cuánta','Cuántos','Cuántas','Cuándo'],a:2,r:'hermanos: masculino plural.'},
 {q:'¿___ café quieres: mucho o poco?',o:['Cuánto','Cuánta','Cuántos','Cuántas','Cuándo'],a:0,r:'café: masculino singular.'},
 {q:'¿___ empieza la clase: a las seis o a las siete?',o:['Cuánto','Cuánta','Cuántos','Cuántas','Cuándo'],a:4,r:'Momento → cuándo.'}]},

'q5_2':{type:'fill',t:'5.2 Escribe la pregunta que corresponde a la respuesta',c:'Usa ¿Cuánto/a/os/as? o ¿Cuándo? (y los interrogativos de la Clase 1). No olvides <b>¿</b> y <b>?</b>.',items:[
 {q:'R: La clase de español empieza a las seis de la tarde.',a:'¿Cuándo empieza la clase de español?',acc:['cuando empieza la clase de español']},
 {q:'R: En mi familia hay tres personas.',a:'¿Cuántas personas hay en tu familia?',acc:['cuantas personas hay en tu familia','cuantos sois en tu familia','cuantas personas hay en la familia']},
 {q:'R: Mi viaje a España es en el mes de septiembre.',a:'¿Cuándo es tu viaje a España?',acc:['cuando es tu viaje a españa','cuando es tu viaje a espana']},
 {q:'R: Este ordenador cuesta seiscientos euros.',a:'¿Cuánto cuesta este ordenador?',acc:['cuanto cuesta este ordenador']},
 {q:'R: Tengo dos hermanos.',a:'¿Cuántos hermanos tienes?',acc:['cuantos hermanos tienes']},
 {q:'R: Mi hermana se llama Amina.',a:'¿Cómo se llama tu hermana?',acc:['como se llama tu hermana']},
 {q:'R: Soy de Marruecos.',a:'¿De dónde eres?',acc:['de donde eres']},
 {q:'R: Bebo mucha agua, dos litros al día.',a:'¿Cuánta agua bebes?',acc:['cuanta agua bebes']}]},

'q5_3':{type:'fill',t:'5.3 Ortografía de la pregunta',c:'Reescribe la pregunta con <b>¿</b>, <b>?</b>, tildes y mayúscula inicial.',items:[
 {q:'cuando es tu cumpleaños',a:'¿Cuándo es tu cumpleaños?',acc:['cuando es tu cumpleaños']},
 {q:'cuantos años tienes',a:'¿Cuántos años tienes?',acc:['cuantos años tienes','cuantos anios tienes']},
 {q:'como se llama usted',a:'¿Cómo se llama usted?',acc:['como se llama usted']},
 {q:'cuanto cuesta este libro',a:'¿Cuánto cuesta este libro?',acc:['cuanto cuesta este libro']},
 {q:'donde vives ahora',a:'¿Dónde vives ahora?',acc:['donde vives ahora']},
 {q:'que quieres beber',a:'¿Qué quieres beber?',acc:['que quieres beber']}]},

/* ---------- ORTOGRAFÍA ---------- */
'orth6_1':{type:'fill',t:'6.1 Corrige las mayúsculas',c:'Reescribe la frase con las mayúsculas correctas (el árabe no tiene mayúsculas: en español solo al inicio de frase y en nombres propios).',items:[
 {q:'Mi Hermano vive en Casablanca.',a:'Mi hermano vive en Casablanca.'},
 {q:'yo soy Médico y mi Madre es francesa.',a:'Yo soy médico y mi madre es francesa.'},
 {q:'El Lunes empieza el Curso de español.',a:'El lunes empieza el curso de español.'},
 {q:'Hola, me Llamo Sophie Martin.',a:'Hola, me llamo Sophie Martin.'},
 {q:'somos una Familia grande y unida.',a:'Somos una familia grande y unida.'},
 {q:'Mi país es Marruecos, y Mi ciudad es Fez.',a:'Mi país es Marruecos y mi ciudad es Fez.',acc:['mi país es marruecos, y mi ciudad es fez','mi pais es marruecos y mi ciudad es fez']}]},

'orth6_2':{type:'choice',t:'6.2 ¿Lleva tilde?',c:'Elige la forma correcta.',items:[
 {q:'el doctor',o:['médico','medico'],a:0,r:'Esdrújula → siempre tilde.'},
 {q:'la familia',o:['fámilia','familia'],a:1,r:'Llana terminada en vocal → sin tilde.'},
 {q:'de España',o:['españól','español'],a:1,r:'Aguda terminada en -l → sin tilde.'},
 {q:'el día de la semana',o:['miércoles','miercoles'],a:0,r:'Esdrújula → siempre tilde.'},
 {q:'el transporte',o:['autobús','autobus'],a:0,r:'Aguda terminada en -s → tilde.'},
 {q:'la bebida caliente',o:['café','cafe'],a:0,r:'Aguda terminada en vocal → tilde.'},
 {q:'la cantidad',o:['número','numero'],a:0,r:'Esdrújula → siempre tilde.'},
 {q:'la lengua',o:['árabe','arabe'],a:0,r:'Esdrújula → siempre tilde.'}]},

'orth6_3':{type:'fill',t:'6.3 h · ñ · b/v',c:'Escribe la palabra completa correctamente.',items:[
 {q:'___ermano (h / j)',a:'hermano'},
 {q:'Tengo veinte ___os. (ñ / n)',a:'años',acc:['anos']},
 {q:'___uenos días (b / v)',a:'buenos'},
 {q:'___ola, ¿qué tal? (h / j)',a:'hola'},
 {q:'Vivo en Espa___a. (ñ / n)',a:'España',acc:['Espana']},
 {q:'En agosto tenemos ___acaciones. (b / v)',a:'vacaciones'}]}
};

const oldWordList = (
  "abacate\nabaixo\nabandono\nabencoar\naberto\nabertura\nabobora\nabraco\nabril\nabsorver\nabstrato\n" +
  "absurdo\nabuso\nacademia\nacampamento\nacao\nacesso\nacidente\nacido\nacima\naco\nacolher\nacordado\nacordar\nacordo\n" +
  "acreditar\nacrescentar\nacucar\nacusar\nacustico\nadaptar\nadiante\nadicionar\nadivinhar\nadmitem\nadotivo\nadquirir\n" +
  "adulto\naerobico\naeroporto\nafastar\nafetivo\nafetuoso\nafiado\nafinidade\naflicao\nagachar\nagarrar\nagente\nagora\n" +
  "agosto\nagua\naguarde\naguia\nainda\naipo\naja\najustar\nalarme\nalbum\nalcancar\nalcance\nalcool\naldeia\naleatoria\n" +
  "alegre\nalegria\naleia\nalem\nalerta\nalfa\nalgodao\nalguem\nalho\nalimentacao\nalistar\nalivio\nalma\nalmoco\n" +
  "almofada\nalteracao\nalterar\nalto\naltura\naluguel\naluna\naluno\nalvo\nalvorecer\namador\namanha\namar\namarelo\n" +
  "amargo\nambito\nameaca\namendoim\namigos\namostra\nampliar\nanalista\nanao\nancora\nandar\nanel\nangulo\nanimal\nano\n" +
  "anoitecer\nansiedade\nansioso\nantena\nantes\nantigo\nantiguidade\nanual\nanunciar\napagar\naparar\naparecer\naperto\n" +
  "aplaudir\naplicar\napoiar\naposentar\napreciar\naprender\naprovar\napto\nar\naranha\narcaico\narco\narea\nareia\n" +
  "arena\nargila\nargumentar\nargumento\narma\narmadilha\narmado\narmadura\narmario\narquivo\narrepender\narrepio\n" +
  "arroz\narte\nartefato\nartico\nartista\nartwork\narvore\nasa\nasma\nasno\naspecto\naspero\nassado\nassalto\n" +
  "assemelhar\nassento\nassumir\nataque\nate\natinar\natirar\natitude\natividade\nativo\natleta\natomo\nator\natrai\n" +
  "atras\natraves\natriz\natual\natualidade\natualizacao\natualizar\natum\nauditar\naumentar\nausente\nauto\nautor\n" +
  "autoria\nautorizar\nauxiliar\navancar\naventura\navestruz\naviso\navistar\nazul\nbaboseira\nbacharel\nbacon\n" +
  "bagagem\nbairrista\nbala\nbalanco\nbaleia\nbambino\nbambu\nbanana\nbancada\nbanco\nbandeira\nbandeja\nbando\n" +
  "banheiro\nbarato\nbarco\nbarganha\nbarra\nbarraca\nbarril\nbarulho\nbase\nbasico\nbatalha\nbatata\nbatedeira\n" +
  "batedor\nbatida\nbebe\nbeber\nbeijo\nbeira\nbeleza\nbem\nbeneficiar\nberco\nbiblioteca\nbicicleta\nbife\nbilhete\n" +
  "biologia\nbitola\nblusa\nboa\nboba\nbobina\nbode\nbola\nbolha\nbolo\nbolsa\nbom\nbomba\nboneca\nbonita\nbonitinho\n" +
  "bonus\nborda\nbordo\nborracha\nborrao\nbraco\nbravo\nbrecha\nbreu\nbreve\nbrilhante\nbrilho\nbrinquedo\nbrisa\n" +
  "broca\nbrocolis\nbronze\nbufalo\nbulbo\nburaco\nburro\nbuscar\ncabeca\ncabelo\ncaber\ncabine\ncabo\ncacar\ncacareco\n" +
  "cacarejar\ncachorro\ncacto\ncadeira\ncafe\ncair\ncaixa\ncalmo\ncaloroso\ncamada\ncamarada\ncamarao\ncambalhota\n" +
  "camera\ncaminhao\ncaminho\ncampeao\ncampo\ncampones\ncanal\ncancao\ncancelar\ncanela\ncaneta\ncanguru\ncanhao\n" +
  "canoa\ncansado\ncantar\ncaos\ncapacete\ncapacidade\ncapaz\ncapital\ncapitao\ncapitulo\ncaptura\ncapturados\n" +
  "capuz\ncara\ncaracteristica\ncarbono\ncardapio\ncarga\ncarimbo\ncarne\ncarpo\ncarranca\ncarregar\ncarrinho\n" +
  "carro\ncarta\ncartao\ncarvalho\ncarvoeira\ncasa\ncasal\ncasamento\ncaso\ncassino\ncasta\ncastanha\ncastanho\n" +
  "castelo\ncasual\ncatalogo\ncategoria\ncausa\ncavalo\ncaverna\ncebola\ncedo\ncego\ncelere\ncem\ncena\ncenso\n" +
  "ceramica\ncerca\ncercar\ncerco\ncereal\ncerebro\ncereja\ncerne\ncerto\ncervo\ncesta\nchama\nchamine\nchao\nchapeu\n" +
  "charuto\nchateado\nchave\nchef\nchefe\nchegar\nchicote\nchifre\nchique\nchoque\nchorar\nchuva\nciclo\ncidadao\n" +
  "cidade\nciencia\ncimento\ncinto\ncirculo\ncitacao\ncitar\nciumes\ncivil\nclemencia\ncliente\nclima\nclinica\n" +
  "clique\nclube\ncobertor\ncobertura\ncobre\ncobrir\ncoco\ncodigo\ncoelho\ncofre\ncogumelo\ncoiote\ncoisa\ncola\n" +
  "coletar\ncolheita\ncolher\ncolisao\ncolocar\ncolossal\ncoluna\ncombinar\ncombustivel\ncomecar\ncomercio\ncomicio\n" +
  "comida\ncompanhia\ncomparecer\ncompartilhar\ncomponente\ncomportamento\ncompra\ncomprador\ncomprimento\ncomprimido\n" +
  "comum\nconceder\nconcha\nconcordar\nconduta\nconectados\nconectar\nconfiar\nconfiguracao\nconfirmar\nconforto\n" +
  "congeladas\ncongresso\nconhecer\nconjurar\nconsciente\nconselho\nconsentir\nconsertar\nconsiderar\nconstruir\n" +
  "conta\ncontar\ncontato\ncontemplacao\ncontente\ncontratar\ncontrolar\nconvencer\nconversa\nconversar\nconvir\n" +
  "convite\ncopia\ncopo\ncor\ncoracao\ncoragem\ncoral\ncorar\ncorpo\ncorre\ncorredor\ncorreto\ncorrida\ncorrigir\n" +
  "corroer\ncortina\ncorvo\ncosta\ncostela\ncotovelo\ncozinha\ncozinhar\ncracha\ncranio\ncratera\ncredito\n" +
  "cremalheira\ncreme\ncrescer\ncrianca\ncriceto\ncrime\ncrise\ncristal\ncritico\ncronica\ncru\ncrucial\ncruel\n" +
  "cruz\ncruzeiro\ncubo\ncuidado\nculpa\ncultura\ncume\ncurioso\ncurso\ncurto\ncurva\ncusto\ncustodia\ndados\n" +
  "danca\ndanificar\ndar\ndebaixo\ndebate\ndecada\ndecidir\ndeclinio\ndecorar\ndecretar\ndedicar\ndedo\ndefesa\n" +
  "definir\ndelgado\ndelicado\ndemitir\ndemolir\ndemora\ndente\ndentista\ndentro\ndepender\ndepois\ndeposito\n" +
  "depressa\ndeputado\nderiva\nderivar\ndesafiar\ndesagradavel\ndesajeitado\ndesaparecer\ndescobrir\ndesconhecido\n" +
  "descrever\ndesculpa\ndesde\ndesdobrar\ndesejo\ndesenhar\ndesenvolver\ndeserto\ndesespero\ndesfazer\ndesfiladeiro\n" +
  "desistir\ndeslizar\ndesmaio\ndesnivelado\ndesordem\ndesperdicio\ndestravar\ndestruir\ndesvaneca\ndesvendar\ndesviar\n" +
  "detalhe\ndetritos\ndeusa\ndever\ndevo\ndez\ndezembro\ndia\ndiagrama\ndiamante\ndiario\ndica\ndiesel\ndieta\ndiferir\n" +
  "dificil\ndigital\ndigitalizacao\ndigitar\ndignidade\ndilema\ndiminuir\ndinamico\ndinheiro\ndinossauro\ndireto\n" +
  "dirigir\ndiscar\ndiscordar\ndisparo\ndispor\ndispositivo\ndistancia\ndistinto\ndiversao\ndiverso\ndivertido\n" +
  "dividido\ndividir\ndivorcio\ndizer\ndoador\ndoar\ndobra\ndoce\ndocumento\ndoenca\ndoente\ndois\ndominar\ndominio\n" +
  "doninha\ndormir\ndose\ndoze\ndragao\ndrama\ndrastico\nduna\nduplo\ndurante\nduto\neco\necologia\neconomia\n" +
  "editar\neducar\nefemero\nefetivo\neixo\nelator\nelefante\nelegante\nelemento\neles\neletrico\nelevador\nelite\n" +
  "embaralhar\nembarcacao\nembarcar\nemblema\nembreagem\nembrulho\nemergir\nemocao\nempenhar\nempinar\nempregada\n" +
  "empregar\nempresa\nemprestado\nemprestar\nemprestimo\nempurrao\nempurrar\nencarnar\nencontrado\nencontrar\n" +
  "endereco\nendossar\nenergia\nenfadonho\nenfermeira\nenfermo\nengenho\nengolir\nengracado\nenigma\nenorme\n" +
  "enriquecer\nensaio\nenseada\nensinar\nensino\nensolarado\nentornar\nentrada\nentrar\nentre\nentregar\nentulho\n" +
  "entupir\nenvelope\nenviar\nenvolver\nenxame\nepisodio\nequilibrar\nequipamento\nequipar\nequipe\nera\nerguido\n" +
  "ermo\nerosao\nerrado\nerro\nerupcao\nesboco\nescada\nescala\nescalada\nescambo\nescapar\nescape\nesclarecer\n" +
  "escola\nescolha\nescolher\nescondido\nescorpiao\nescova\nescreva\nescrita\nescritorio\nescriturario\nescrivaninha\n" +
  "escudo\nesfarelar\nesfera\nesforco\nesfregar\nesmagamento\nespacial\nespaco\nespada\nespalhar\nespecial\n" +
  "especiaria\nespelho\nesperanca\nesperar\nespero\nesperto\nespiao\nespigao\nespirito\nesporte\nesposa\n" +
  "espuma\nesquadra\nesqueco\nesquema\nesquerda\nesqui\nesquilo\nesquisito\nessencia\nesta\nestacao\nestadio\n" +
  "estado\nestalo\nestavel\nestereo\nestilo\nestimacao\nestojo\nestomago\nestoque\nestrada\nestragar\nestrangeiro\n" +
  "estrategia\netapa\neterno\netica\netiqueta\nevidencia\nevidente\nevita\nevitar\nevocar\nevoluir\nexame\nexato\n" +
  "excesso\nexcitar\nexcluir\nexclusivo\nexecutar\nexemplo\nexercicio\nexercito\nexibicao\nexigem\nexigir\nexilio\n" +
  "existir\nexotico\nexpandir\nexpediente\nexperimentar\nexpirar\nexplicar\nexplosao\nexpor\nexposicao\nexposto\n" +
  "expressar\nextenso\nexterior\nexterno\nextra\nfaca\nfacil\nfacilmente\nfaco\nfaculdade\nfadiga\nfalar\nfalcao\n" +
  "falecimento\nfalha\nfalso\nfama\nfamilia\nfaminto\nfamoso\nfantasia\nfantasma\nfardo\nfarejar\nfatal\nfatia\n" +
  "favor\nfavorito\nfazenda\nfe\nfebre\nfechar\nfederal\nfeijao\nfeio\nfeliz\nfemea\nfenda\nferiado\nferido\n" +
  "ferramenta\nferro\nferver\nfesta\nfestival\nfevereiro\nfibra\nficcao\nfiel\nfigura\nfilha\nfilme\nfiltro\nfim\n" +
  "final\nfino\nfio\nfique\nfiscal\nfisico\nfita\nflash\nflecha\nflor\nfloresta\nfluido\nflutuador\nflutuar\n" +
  "foco\nfofoca\nfogao\nfogo\nfoguete\nfolha\nfonte\nfora\nforca\nfornalha\nfornecedor\nfornecem\nfornecer\nforno\n" +
  "forte\nfortuna\nforum\nfosforo\nfossil\nfoto\nfotografia\nfragil\nfragmento\nfrango\nfranja\nfrase\nfrente\n" +
  "frequente\nfrequentemente\nfresco\nfrete\nfronteira\nfrustrar\nfruta\nfugir\nfulgor\nfumaca\nfuncionarios\n" +
  "fundicao\nfundir\nfuria\nfutebol\nfuturamente\nfuturo\ngado\ngafe\ngaiola\ngalaxia\ngaleria\ngalinha\nganhar\n" +
  "ganho\nganso\ngaragem\ngarantia\ngarantir\ngarfo\ngaroto\ngarra\ngarrucha\ngas\ngastar\ngatilho\ngatinho\n" +
  "gato\ngeada\ngeleia\ngelo\ngemeo\ngenero\ngengibre\ngenio\ngenuino\ngeral\ngerir\ngesto\ngigante\nginastica\n" +
  "girafa\ngirar\ngiro\ngiz\nglobo\ngloria\ngolfinho\ngordo\ngorila\ngospel\ngostar\ngosto\ngotejamento\ngoverno\n" +
  "graca\ngracejo\ngrade\ngrama\ngramado\ngrampo\ngrande\ngrao\ngrau\ngravidade\ngreve\ngrilo\ngrosseiro\n" +
  "grunhido\ngrupo\nguarda\nguardanapo\nguaxinim\nguerra\nguerreiro\nguia\nguindaste\nguri\nha\nhabilidade\n" +
  "habilitar\nhabitante\nhabito\nhamburguer\nhaste\nherdar\nheroi\nhibrido\nhistoria\nhoje\nholandes\nhomem\n" +
  "hoquei\nhora\nhorrivel\nhorror\nhospedeiro\nhospital\nhotel\nhumano\nhumilde\nhumor\nicone\nidade\nideia\n" +
  "identificar\nignorar\nigual\niguaria\nilegal\nilha\nimagem\nimenso\nimitar\nimpacto\nimpor\nimportam\nimprecisao\n" +
  "impressao\nimpressionante\nimpulsionar\nimpulso\nimune\ninalar\ninativo\nincapaz\ninclinar\nincluir\nincomum\n" +
  "inconsciente\nincorporado\nindagacao\nindicar\nindice\nindustria\ninexato\ninfantil\ninfeliz\ninferior\n" +
  "infligir\ninformar\ningenuo\ninicial\ninicio\ninimigo\ninjetar\ninjusto\ninocente\ninquerito\ninquilino\n" +
  "insano\ninscrever\ninseto\ninsignia\ninspirar\ninstalar\ninstar\nintacto\ninteligente\ninteresse\ninterior\n" +
  "interminavel\ninterruptor\ninutil\ninverno\ninvestir\ninvez\nirma\nirmao\nisolar\nitem\nja\njaguar\njamais\n" +
  "janela\njantar\njaqueta\njarda\njardim\njarra\njazz\njeans\njeito\njoelho\njogo\njoia\njornada\njovem\n" +
  "juiz\njunior\njunte\njuntos\njurar\njuventude\nkalanga\nketchup\nkiwi\nla\nlabaro\nlabirinto\nlaboratorio\n" +
  "laco\nlacuna\nlado\nlagarto\nlago\nlagoa\nlagosta\nlaje\nlamina\nlampada\nlancamento\nlancar\nlanche\n" +
  "lapis\nlaptop\nlaranja\nlargo\nlargura\nlata\nlatino\nlava\nlavanderia\nlavar\nlazer\nleao\nlegal\nlei\n" +
  "leilao\nleite\nlembrar\nlenda\nlente\nlento\nleopardo\nlerdo\nleste\nletra\nlevantar\nleve\nliberdade\n" +
  "licao\nlicenca\nlider\nligacao\nligar\nligeiro\nlimao\nlimitar\nlimite\nlimpar\nlingua\nlinguica\nlinha\n" +
  "liquido\nlista\nlisura\nlivre\nlivro\nlixo\nlobo\nlocal\nlocalidade\nlocomocao\nlogica\nloja\nlona\nlonge\n" +
  "longo\nloteria\nlouco\nlouvor\nlua\nlucro\nlugar\nlunar\nluta\nlutar\nluva\nluxo\nmaca\nmacaco\nmadeira\n" +
  "madrugada\nmae\nmagia\nmagnetico\nmaior\nmais\nmal\nmalha\nmaluco\nmamae\nmamifero\nmandato\nmanga\nmanha\n" +
  "mansao\nmanteiga\nmanual\nmao\nmaquina\nmar\nmaravilha\nmarca\nmarcha\nmare\nmarfim\nmargem\nmarido\nmarinho\n" +
  "marmore\nmartelo\nmascara\nmassa\nmatematica\nmaterial\nmatriz\nmaximo\nmazela\nmecanico\nmedalha\nmedia\n" +
  "medico\nmedida\nmeia\nmeio\nmel\nmelancolia\nmelhor\nmelhorar\nmelodia\nmembro\nmemoria\nmencao\nmenina\nmenor\n" +
  "mensagem\nmente\nmentiroso\nmercado\nmercearia\nmergulho\nmerito\nmes\nmesa\nmesmo\nmetade\nmetal\nmetodo\n" +
  "metro\nmidia\nmilagre\nmilhao\nmilho\nminimo\nminusculo\nminuto\nmira\nmiseria\nmisericordia\nmisterio\nmistura\n" +
  "misturado\nmisturar\nmito\nmoda\nmodelo\nmoderno\nmodificar\nmoeda\nmoita\nmolhado\nmolho\nmomento\nmonitor\n" +
  "monstro\nmontanha\nmonte\nmoral\nmosca\nmosquito\nmostra\nmotor\nmovel\nmover\nmovimento\nmudanca\nmuito\nmula\n" +
  "mulher\nmultidao\nmultiplicar\nmundo\nmusculo\nmuseu\nmusica\nmutuo\nnacao\nnaco\nnada\nnadar\nnanico\n" +
  "nariz\nnascimento\nnatureza\nnavalha\nnavio\nnecessidade\nnecessitar\nnegacao\nnegar\nnegativo\nnegligencia\n" +
  "negocio\nnem\nnervo\nneutro\nneve\nnevoa\nninho\nnivel\nnobre\nnoite\nnoivado\nnome\nnomeacao\nnoodle\nnormal\n" +
  "norte\nnota\nnotavel\nnoticia\nnovamente\nnovela\nnoz\nnuclear\nnumero\nnunca\nnuvem\nobedecer\nobjetivo\n" +
  "objeto\nobrigado\nobrigar\nobscurecer\nobservar\nobstaculo\nobtivermos\nobvio\noceano\noco\nocorrencia\n" +
  "ocorrer\nocupado\nodor\noeste\noferta\noficio\noito\nok\nola\noleo\nolho\nolimpico\noliva\nombro\nombros\n" +
  "omitir\nonda\nonde\nondulacao\nonibus\nopcao\nopera\nopiniao\nopor\norbita\norcamento\nordem\nordenar\norfao\n" +
  "organizar\norgao\norgulho\norgulhoso\norientar\noriginal\nosso\nostra\nou\nourico\nouro\nousado\noutono\n" +
  "outro\noutrora\noutros\noutubro\noval\novas\novo\noxigenio\nozonio\npa\npaciente\npacote\npacto\npadrao\npadre\n" +
  "pagamento\npagina\npai\npainel\npais\npalacio\npalavra\npalestra\npalhaco\npalma\npalpavel\npanda\npanico\npano\n" +
  "pantano\npantera\npao\npapagaio\npapel\npar\nparada\nparagem\nparede\nparente\nparodiar\nparque\nparte\npartido\n" +
  "partilhado\npassar\npassaro\npassatempo\npasseio\npasso\npatife\npatim\npato\npatrao\npatrocinador\npatrulha\n" +
  "pausa\npavimentar\npaz\npe\npeca\npedra\npeito\npeixe\npele\npelicano\npelicula\npena\npenhasco\npenhor\n" +
  "pensamento\npequeno\npera\nperdao\nperfeito\nperguntar\npericia\nperigo\npermanecer\npermitir\nperna\n" +
  "personalizadas\nperto\nperu\npesado\npescoco\npesquisa\npessoa\npessoas\npiano\npicada\npiloto\npimenta\n" +
  "pioneiro\npipa\npiquenique\npiramide\npiscadela\npiscina\npista\npistola\npizza\nplaneta\nplano\nplanta\n" +
  "plastico\nplugue\npo\npobreza\npoder\npoeira\npoema\npoeta\npolar\npolegada\npolegar\npolicia\npolo\npolpa\n" +
  "pomar\npomba\npombo\nponei\npontape\nponte\nponto\npopular\nporco\nporque\nporrete\nporta\nportao\nporto\n" +
  "posicao\npossivel\npostar\npoucos\npoupar\nprado\npraia\nprata\npratica\nprato\nprazer\nprazo\npreco\npreferir\n" +
  "preguicoso\nprejuizo\npremio\nprender\npreocupacao\npreparar\npresente\npressa\npreto\nprever\nprimario\n" +
  "primavera\nprimeiro\nprimo\nprimor\nprincipal\nprincipio\nprioridade\nprisao\nprivado\nproblema\nprocesso\n" +
  "procurar\nproduzir\nprofundidade\nprograma\nprogredir\nprojeto\npromover\npronto\npropelir\nproposito\n" +
  "propriedade\nproprietario\nproprio\nprosperar\nproteger\nprova\nprovincia\nproximo\npublico\npudim\npulso\n" +
  "pureza\npuxar\nquadrado\nquadril\nquadrinho\nquadro\nquais\nqualidade\nqualquer\nquando\nquantidade\n" +
  "quarto\nquase\nque\nquebradico\nqueijo\nqueque\nquer\nquestao\nquestionario\nquota\nra\nrabo\nradar\n" +
  "radio\nraiva\nrampa\nrancho\nranhura\nrapido\nraposa\nraro\nrascunho\nraso\nrastejar\nrastrear\nrato\n" +
  "razao\nreabrir\nreal\nrebanho\nrebelde\nreceber\nreceita\nreceoso\nreciclar\nrecompensa\nreconstruir\n" +
  "recordacao\nrecruta\nrecurso\nrecusar\nrede\nredor\nreduzir\nrefletir\nreforma\nrefrigerante\nregalo\n" +
  "regiao\nregime\nregional\nregistro\nregra\nregulado\nregular\nreino\nreivindicacao\nrejeitar\nrelance\n" +
  "relativamente\nrelatorio\nrelaxe\nrelogio\nreluzente\nrelva\nremendo\nremeter\nremover\nrenda\nrender\n" +
  "renovar\nreparar\nrepente\nrepetir\nrepolho\nresgatar\nresistir\nresolver\nresponda\nresposta\nressalto\n" +
  "restante\nresto\nresultado\nresvalar\nretiro\nretorna\nreuniao\nreunir\nrevelar\nrevisao\nrico\nrifle\n" +
  "rigido\nrim\nrio\nriqueza\nrir\nrisadinha\nrisco\nritmo\nritual\nrival\nrobo\nrobusto\nroda\nrodar\n" +
  "romance\nromaria\nrosa\nrota\nrotulo\nrua\nrubor\nrubrica\nrural\nsabedoria\nsabonete\nsabor\nsafra\n" +
  "saia\nsaida\nsair\nsal\nsalada\nsalao\nsalario\nsalmao\nsaltar\nsalvar\nsangue\nsapato\nsatisfazer\n" +
  "satoshi\nsaudacao\nsaude\nsecao\nseco\nseculo\nseda\nsegmento\nsegredo\nsegue\nsegundo\nseguranca\n" +
  "seguro\nseis\nsela\nselecionar\nselva\nselvagem\nsemelhante\nsemente\nseminario\nsempre\nsenhora\n" +
  "senhorita\nsenior\nsensato\nsentido\nsentir\nsereia\nserie\nserpente\nservico\nsessao\nsete\nshow\n" +
  "significar\nsilencioso\nsilica\nsimbolo\nsimples\nsinal\nsino\nsintoma\nsistema\nsituar\nslogan\n" +
  "so\nsobrancelha\nsobre\nsobrinho\nsocial\nsoco\nsocorro\nsofa\nsofrer\nsol\nsolar\nsoldado\nsoletrar\n" +
  "solido\nsolitario\nsolta\nsolucao\nsom\nsombra\nsombrinha\nsomente\nsonho\nsopa\nsorrir\nsorte\nsozinho\n" +
  "spray\nsuave\nsubstituir\nsucesso\nsuco\nsuficiente\nsufoco\nsugerir\nsugestao\nsujeira\nsujeito\nsul\n" +
  "super\nsuperficie\nsuperior\nsuporte\nsupremo\nsurpreendente\nsurpresa\nsuspeito\nsuspiro\nsussurro\n" +
  "sustentar\nsusto\ntabaco\ntal\ntalento\ntamanho\ntambem\ntambor\ntamborete\ntanque\ntapete\ntarde\n" +
  "tarefa\ntarifa\ntartaruga\ntatuagem\ntaxa\ntaxi\ntecido\ntela\ntelefone\ntema\ntempo\ntendencia\n" +
  "tenis\ntentativas\nteoria\nter\nterminar\nterno\nterra\ntesouras\nteste\ntestemunha\ntestemunho\n" +
  "teto\ntexto\ntia\ntigre\ntijolo\ntimido\ntio\ntipica\ntipo\ntitulo\ntocha\ntodo\ntodos\ntom\ntomate\n" +
  "tombar\ntonto\ntopo\ntoque\ntorcao\ntornado\ntornozelo\ntorrada\ntorre\ntorrente\ntotal\ntotalidade\n" +
  "trabalho\ntraco\ntrafego\ntragico\ntrair\ntrama\ntramela\ntrancar\ntransferir\ntransportar\ntratar\n" +
  "trazer\ntreinador\ntrem\ntres\ntriangulo\ntribo\ntrigo\ntrilho\ntrimestre\ntriplo\ntriste\ntristeza\n" +
  "triunfar\ntroca\ntrofeu\ntrombada\ntrombeta\ntropecar\ntrovao\ntruque\ntubo\ntumulto\ntunel\nturista\n" +
  "um\numido\nunico\nunidade\nuniforme\nuniverso\nurbano\nurdidura\nusar\nusava\nuso\nusual\nutil\n" +
  "utilidade\nuva\nvacuo\nvagao\nvago\nvale\nvalido\nvalise\nvalor\nvalvula\nvan\nvapor\nvara\nvaranda\n" +
  "varios\nvassoura\nvazio\nveiculo\nvela\nvelho\nvelocidade\nveludo\nvencedora\nvender\nventilador\n" +
  "verao\nverbo\nverdade\nverdadeiramente\nverdadeiro\nverde\nvereda\nverifica\nverificar\nversao\nverter\n" +
  "vespa\nvestem\nvestido\nvestigio\nvestir\nvestuario\nveterano\nvez\nviagem\nviavel\nvibrante\nviciado\n" +
  "vicioso\nvida\nvideo\nvidro\nvincular\nvinho\nvintage\nvinte\nviolao\nviolino\nvir\nvirtual\nvirus\n" +
  "visa\nvisao\nvisita\nvislumbre\nvista\nvisual\nvital\nvitoria\nviver\nvivido\nvivo\nvoar\nvocal\n" +
  "voce\nvolta\nvolume\nvontade\nvoto\nvoz\nvulcao\nxarope\nxerife\nzangado\nzebra\nzero\nzona\nzoologico\n" +
  "zumbido"
).split("\n");
const newWordList = (
  "abacate\nabaixo\nabalar\nabater\nabduzir\nabelha\naberto\nabismo\nabotoar\nabranger\n" +
  "abreviar\nabrigar\nabrupto\nabsinto\nabsoluto\nabsurdo\nabutre\nacabado\nacalmar\nacampar\nacanhar\nacaso\n" +
  "aceitar\nacelerar\nacenar\nacervo\nacessar\nacetona\nachatar\nacidez\nacima\nacionado\nacirrar\naclamar\n" +
  "aclive\nacolhida\nacomodar\nacoplar\nacordar\nacumular\nacusador\nadaptar\nadega\nadentro\nadepto\nadequar\n" +
  "aderente\nadesivo\nadeus\nadiante\naditivo\nadjetivo\nadjunto\nadmirar\nadorar\nadquirir\nadubo\nadverso\n" +
  "advogado\naeronave\nafastar\naferir\nafetivo\nafinador\nafivelar\naflito\nafluente\nafrontar\nagachar\nagarrar\n" +
  "agasalho\nagenciar\nagilizar\nagiota\nagitado\nagora\nagradar\nagreste\nagrupar\naguardar\nagulha\najoelhar\n" +
  "ajudar\najustar\nalameda\nalarme\nalastrar\nalavanca\nalbergue\nalbino\nalcatra\naldeia\nalecrim\nalegria\n" +
  "alertar\nalface\nalfinete\nalgum\nalheio\naliar\nalicate\nalienar\nalinhar\naliviar\nalmofada\nalocar\nalpiste\n" +
  "alterar\naltitude\nalucinar\nalugar\naluno\nalusivo\nalvo\namaciar\namador\namarelo\namassar\nambas\nambiente\n" +
  "ameixa\namenizar\namido\namistoso\namizade\namolador\namontoar\namoroso\namostra\namparar\nampliar\nampola\n" +
  "anagrama\nanalisar\nanarquia\nanatomia\nandaime\nanel\nanexo\nangular\nanimar\nanjo\nanomalia\nanotado\nansioso\n" +
  "anterior\nanuidade\nanunciar\nanzol\napagador\napalpar\napanhado\napego\napelido\napertada\napesar\napetite\n" +
  "apito\naplauso\naplicada\napoio\napontar\naposta\naprendiz\naprovar\naquecer\narame\naranha\narara\narcada\n" +
  "ardente\nareia\narejar\narenito\naresta\nargiloso\nargola\narma\narquivo\narraial\narrebate\narriscar\narroba\n" +
  "arrumar\narsenal\narterial\nartigo\narvoredo\nasfaltar\nasilado\naspirar\nassador\nassinar\nassoalho\nassunto\n" +
  "astral\natacado\natadura\natalho\natarefar\natear\natender\naterro\nateu\natingir\natirador\nativo\natoleiro\n" +
  "atracar\natrevido\natriz\natual\natum\nauditor\naumentar\naura\naurora\nautismo\nautoria\nautuar\navaliar\n" +
  "avante\navaria\navental\navesso\naviador\navisar\navulso\naxila\nazarar\nazedo\nazeite\nazulejo\nbabar\nbabosa\n" +
  "bacalhau\nbacharel\nbacia\nbagagem\nbaiano\nbailar\nbaioneta\nbairro\nbaixista\nbajular\nbaleia\nbaliza\nbalsa\n" +
  "banal\nbandeira\nbanho\nbanir\nbanquete\nbarato\nbarbado\nbaronesa\nbarraca\nbarulho\nbaseado\nbastante\nbatata\n" +
  "batedor\nbatida\nbatom\nbatucar\nbaunilha\nbeber\nbeijo\nbeirada\nbeisebol\nbeldade\nbeleza\nbelga\nbeliscar\n" +
  "bendito\nbengala\nbenzer\nberimbau\nberlinda\nberro\nbesouro\nbexiga\nbezerro\nbico\nbicudo\nbienal\nbifocal\n" +
  "bifurcar\nbigorna\nbilhete\nbimestre\nbimotor\nbiologia\nbiombo\nbiosfera\nbipolar\nbirrento\nbiscoito\nbisneto\n" +
  "bispo\nbissexto\nbitola\nbizarro\nblindado\nbloco\nbloquear\nboato\nbobagem\nbocado\nbocejo\nbochecha\nboicotar\n" +
  "bolada\nboletim\nbolha\nbolo\nbombeiro\nbonde\nboneco\nbonita\nborbulha\nborda\nboreal\nborracha\nbovino\n" +
  "boxeador\nbranco\nbrasa\nbraveza\nbreu\nbriga\nbrilho\nbrincar\nbroa\nbrochura\nbronzear\nbroto\nbruxo\nbucha\n" +
  "budismo\nbufar\nbule\nburaco\nbusca\nbusto\nbuzina\ncabana\ncabelo\ncabide\ncabo\ncabrito\ncacau\ncacetada\n" +
  "cachorro\ncacique\ncadastro\ncadeado\ncafezal\ncaiaque\ncaipira\ncaixote\ncajado\ncaju\ncalafrio\ncalcular\n" +
  "caldeira\ncalibrar\ncalmante\ncalota\ncamada\ncambista\ncamisa\ncamomila\ncampanha\ncamuflar\ncanavial\ncancelar\n" +
  "caneta\ncanguru\ncanhoto\ncanivete\ncanoa\ncansado\ncantar\ncanudo\ncapacho\ncapela\ncapinar\ncapotar\ncapricho\n" +
  "captador\ncapuz\ncaracol\ncarbono\ncardeal\ncareca\ncarimbar\ncarneiro\ncarpete\ncarreira\ncartaz\ncarvalho\n" +
  "casaco\ncasca\ncasebre\ncastelo\ncasulo\ncatarata\ncativar\ncaule\ncausador\ncautelar\ncavalo\ncaverna\ncebola\n" +
  "cedilha\ncegonha\ncelebrar\ncelular\ncenoura\ncenso\ncenteio\ncercar\ncerrado\ncerteiro\ncerveja\ncetim\n" +
  "cevada\nchacota\nchaleira\nchamado\nchapada\ncharme\nchatice\nchave\nchefe\nchegada\ncheiro\ncheque\nchicote\n" +
  "chifre\nchinelo\nchocalho\nchover\nchumbo\nchutar\nchuva\ncicatriz\nciclone\ncidade\ncidreira\nciente\ncigana\n" +
  "cimento\ncinto\ncinza\nciranda\ncircuito\ncirurgia\ncitar\nclareza\nclero\nclicar\nclone\nclube\ncoado\n" +
  "coagir\ncobaia\ncobertor\ncobrar\ncocada\ncoelho\ncoentro\ncoeso\ncogumelo\ncoibir\ncoifa\ncoiote\ncolar\n" +
  "coleira\ncolher\ncolidir\ncolmeia\ncolono\ncoluna\ncomando\ncombinar\ncomentar\ncomitiva\ncomover\ncomplexo\n" +
  "comum\nconcha\ncondor\nconectar\nconfuso\ncongelar\nconhecer\nconjugar\nconsumir\ncontrato\nconvite\ncooperar\n" +
  "copeiro\ncopiador\ncopo\ncoquetel\ncoragem\ncordial\ncorneta\ncoronha\ncorporal\ncorreio\ncortejo\ncoruja\n" +
  "corvo\ncosseno\ncostela\ncotonete\ncouro\ncouve\ncovil\ncozinha\ncratera\ncravo\ncreche\ncredor\ncreme\ncrer\n" +
  "crespo\ncriada\ncriminal\ncrioulo\ncrise\ncriticar\ncrosta\ncrua\ncruzeiro\ncubano\ncueca\ncuidado\ncujo\n" +
  "culatra\nculminar\nculpar\ncultura\ncumprir\ncunhado\ncupido\ncurativo\ncurral\ncursar\ncurto\ncuspir\n" +
  "custear\ncutelo\ndamasco\ndatar\ndebater\ndebitar\ndeboche\ndebulhar\ndecalque\ndecimal\ndeclive\ndecote\n" +
  "decretar\ndedal\ndedicado\ndeduzir\ndefesa\ndefumar\ndegelo\ndegrau\ndegustar\ndeitado\ndeixar\ndelator\n" +
  "delegado\ndelinear\ndelonga\ndemanda\ndemitir\ndemolido\ndentista\ndepenado\ndepilar\ndepois\ndepressa\n" +
  "depurar\nderiva\nderramar\ndesafio\ndesbotar\ndescanso\ndesenho\ndesfiado\ndesgaste\ndesigual\ndeslize\n" +
  "desmamar\ndesova\ndespesa\ndestaque\ndesviar\ndetalhar\ndetentor\ndetonar\ndetrito\ndeusa\ndever\ndevido\n" +
  "devotado\ndezena\ndiagrama\ndialeto\ndidata\ndifuso\ndigitar\ndilatado\ndiluente\ndiminuir\ndinastia\n" +
  "dinheiro\ndiocese\ndireto\ndiscreta\ndisfarce\ndisparo\ndisquete\ndissipar\ndistante\nditador\ndiurno\n" +
  "diverso\ndivisor\ndivulgar\ndizer\ndobrador\ndolorido\ndomador\ndominado\ndonativo\ndonzela\ndormente\n" +
  "dorsal\ndosagem\ndourado\ndoutor\ndrenagem\ndrible\ndrogaria\nduelar\nduende\ndueto\nduplo\nduquesa\n" +
  "durante\nduvidoso\neclodir\necoar\necologia\nedificar\nedital\neducado\nefeito\nefetivar\nejetar\nelaborar\n" +
  "eleger\neleitor\nelenco\nelevador\neliminar\nelogiar\nembargo\nembolado\nembrulho\nembutido\nemenda\n" +
  "emergir\nemissor\nempatia\nempenho\nempinado\nempolgar\nemprego\nempurrar\nemulador\nencaixe\nencenado\n" +
  "enchente\nencontro\nendeusar\nendossar\nenfaixar\nenfeite\nenfim\nengajado\nengenho\nenglobar\nengomado\n" +
  "engraxar\nenguia\nenjoar\nenlatar\nenquanto\nenraizar\nenrolado\nenrugar\nensaio\nenseada\nensino\nensopado\n" +
  "entanto\nenteado\nentidade\nentortar\nentrada\nentulho\nenvergar\nenviado\nenvolver\nenxame\nenxerto\nenxofre\n" +
  "enxuto\nepiderme\nequipar\nereto\nerguido\nerrata\nerva\nervilha\nesbanjar\nesbelto\nescama\nescola\n" +
  "escrita\nescuta\nesfinge\nesfolar\nesfregar\nesfumado\nesgrima\nesmalte\nespanto\nespelho\nespiga\nesponja\n" +
  "espreita\nespumar\nesquerda\nestaca\nesteira\nesticar\nestofado\nestrela\nestudo\nesvaziar\netanol\netiqueta\n" +
  "euforia\neuropeu\nevacuar\nevaporar\nevasivo\neventual\nevidente\nevoluir\nexagero\nexalar\nexaminar\nexato\n" +
  "exausto\nexcesso\nexcitar\nexclamar\nexecutar\nexemplo\nexibir\nexigente\nexonerar\nexpandir\nexpelir\nexpirar\n" +
  "explanar\nexposto\nexpresso\nexpulsar\nexterno\nextinto\nextrato\nfabricar\nfabuloso\nfaceta\nfacial\nfada\n" +
  "fadiga\nfaixa\nfalar\nfalta\nfamiliar\nfandango\nfanfarra\nfantoche\nfardado\nfarelo\nfarinha\nfarofa\nfarpa\n" +
  "fartura\nfatia\nfator\nfavorita\nfaxina\nfazenda\nfechado\nfeijoada\nfeirante\nfelino\nfeminino\nfenda\nfeno\n" +
  "fera\nferiado\nferrugem\nferver\nfestejar\nfetal\nfeudal\nfiapo\nfibrose\nficar\nficheiro\nfigurado\nfileira\n" +
  "filho\nfilme\nfiltrar\nfirmeza\nfisgada\nfissura\nfita\nfivela\nfixador\nfixo\nflacidez\nflamingo\nflanela\n" +
  "flechada\nflora\nflutuar\nfluxo\nfocal\nfocinho\nfofocar\nfogo\nfoguete\nfoice\nfolgado\nfolheto\nforjar\n" +
  "formiga\nforno\nforte\nfosco\nfossa\nfragata\nfralda\nfrango\nfrasco\nfraterno\nfreira\nfrente\nfretar\nfrieza\n" +
  "friso\nfritura\nfronha\nfrustrar\nfruteira\nfugir\nfulano\nfuligem\nfundar\nfungo\nfunil\nfurador\nfurioso\n" +
  "futebol\ngabarito\ngabinete\ngado\ngaiato\ngaiola\ngaivota\ngalega\ngalho\ngalinha\ngalocha\nganhar\ngaragem\n" +
  "garfo\ngargalo\ngarimpo\ngaroupa\ngarrafa\ngasoduto\ngasto\ngata\ngatilho\ngaveta\ngazela\ngelado\ngeleia\ngelo\n" +
  "gemada\ngemer\ngemido\ngeneroso\ngengiva\ngenial\ngenoma\ngenro\ngeologia\ngerador\ngerminar\ngesso\ngestor\n" +
  "ginasta\ngincana\ngingado\ngirafa\ngirino\nglacial\nglicose\nglobal\nglorioso\ngoela\ngoiaba\ngolfe\ngolpear\n" +
  "gordura\ngorjeta\ngorro\ngostoso\ngoteira\ngovernar\ngracejo\ngradual\ngrafite\ngralha\ngrampo\ngranada\ngratuito\n" +
  "graveto\ngraxa\ngrego\ngrelhar\ngreve\ngrilo\ngrisalho\ngritaria\ngrosso\ngrotesco\ngrudado\ngrunhido\ngruta\n" +
  "guache\nguarani\nguaxinim\nguerrear\nguiar\nguincho\nguisado\ngula\nguloso\nguru\nhabitar\nharmonia\nhaste\n" +
  "haver\nhectare\nherdar\nheresia\nhesitar\nhiato\nhibernar\nhidratar\nhiena\nhino\nhipismo\nhipnose\nhipoteca\n" +
  "hoje\nholofote\nhomem\nhonesto\nhonrado\nhormonal\nhospedar\nhumorado\niate\nideia\nidoso\nignorado\nigreja\n" +
  "iguana\nileso\nilha\niludido\niluminar\nilustrar\nimagem\nimediato\nimenso\nimersivo\niminente\nimitador\n" +
  "imortal\nimpacto\nimpedir\nimplante\nimpor\nimprensa\nimpune\nimunizar\ninalador\ninapto\ninativo\nincenso\n" +
  "inchar\nincidir\nincluir\nincolor\nindeciso\nindireto\nindutor\nineficaz\ninerente\ninfantil\ninfestar\n" +
  "infinito\ninflamar\ninformal\ninfrator\ningerir\ninibido\ninicial\ninimigo\ninjetar\ninocente\ninodoro\n" +
  "inovador\ninox\ninquieto\ninscrito\ninseto\ninsistir\ninspetor\ninstalar\ninsulto\nintacto\nintegral\nintimar\n" +
  "intocado\nintriga\ninvasor\ninverno\ninvicto\ninvocar\niogurte\niraniano\nironizar\nirreal\nirritado\nisca\n" +
  "isento\nisolado\nisqueiro\nitaliano\njaneiro\njangada\njanta\njararaca\njardim\njarro\njasmim\njato\njavali\n" +
  "jazida\njejum\njoaninha\njoelhada\njogador\njoia\njornal\njorrar\njovem\njuba\njudeu\njudoca\njuiz\njulgador\n" +
  "julho\njurado\njurista\njuro\njusta\nlabareda\nlaboral\nlacre\nlactante\nladrilho\nlagarta\nlagoa\nlaje\n" +
  "lamber\nlamentar\nlaminar\nlampejo\nlanche\nlapidar\nlapso\nlaranja\nlareira\nlargura\nlasanha\nlastro\n" +
  "lateral\nlatido\nlavanda\nlavoura\nlavrador\nlaxante\nlazer\nlealdade\nlebre\nlegado\nlegendar\nlegista\nleigo\n" +
  "leiloar\nleitura\nlembrete\nleme\nlenhador\nlentilha\nleoa\nlesma\nleste\nletivo\nletreiro\nlevar\nleveza\n" +
  "levitar\nliberal\nlibido\nliderar\nligar\nligeiro\nlimitar\nlimoeiro\nlimpador\nlinda\nlinear\nlinhagem\n" +
  "liquidez\nlistagem\nlisura\nlitoral\nlivro\nlixa\nlixeira\nlocador\nlocutor\nlojista\nlombo\nlona\nlonge\n" +
  "lontra\nlorde\nlotado\nloteria\nloucura\nlousa\nlouvar\nluar\nlucidez\nlucro\nluneta\nlustre\nlutador\nluva\n" +
  "macaco\nmacete\nmachado\nmacio\nmadeira\nmadrinha\nmagnata\nmagreza\nmaior\nmais\nmalandro\nmalha\nmalote\nmaluco\n" +
  "mamilo\nmamoeiro\nmamute\nmanada\nmancha\nmandato\nmanequim\nmanhoso\nmanivela\nmanobrar\nmansa\nmanter\n" +
  "manusear\nmapeado\nmaquinar\nmarcador\nmaresia\nmarfim\nmargem\nmarinho\nmarmita\nmaroto\nmarquise\nmarreco\n" +
  "martelo\nmarujo\nmascote\nmasmorra\nmassagem\nmastigar\nmatagal\nmaterno\nmatinal\nmatutar\nmaxilar\nmedalha\n" +
  "medida\nmedusa\nmegafone\nmeiga\nmelancia\nmelhor\nmembro\nmemorial\nmenino\nmenos\nmensagem\nmental\nmerecer\n" +
  "mergulho\nmesada\nmesclar\nmesmo\nmesquita\nmestre\nmetade\nmeteoro\nmetragem\nmexer\nmexicano\nmicro\nmigalha\n" +
  "migrar\nmilagre\nmilenar\nmilhar\nmimado\nminerar\nminhoca\nministro\nminoria\nmiolo\nmirante\nmirtilo\nmisturar\n" +
  "mocidade\nmoderno\nmodular\nmoeda\nmoer\nmoinho\nmoita\nmoldura\nmoleza\nmolho\nmolinete\nmolusco\nmontanha\n" +
  "moqueca\nmorango\nmorcego\nmordomo\nmorena\nmosaico\nmosquete\nmostarda\nmotel\nmotim\nmoto\nmotriz\nmuda\n" +
  "muito\nmulata\nmulher\nmultar\nmundial\nmunido\nmuralha\nmurcho\nmuscular\nmuseu\nmusical\nnacional\nnadador\n" +
  "naja\nnamoro\nnarina\nnarrado\nnascer\nnativa\nnatureza\nnavalha\nnavegar\nnavio\nneblina\nnebuloso\nnegativa\n" +
  "negociar\nnegrito\nnervoso\nneta\nneural\nnevasca\nnevoeiro\nninar\nninho\nnitidez\nnivelar\nnobreza\nnoite\n" +
  "noiva\nnomear\nnominal\nnordeste\nnortear\nnotar\nnoticiar\nnoturno\nnovelo\nnovilho\nnovo\nnublado\nnudez\n" +
  "numeral\nnupcial\nnutrir\nnuvem\nobcecado\nobedecer\nobjetivo\nobrigado\nobscuro\nobstetra\nobter\nobturar\n" +
  "ocidente\nocioso\nocorrer\noculista\nocupado\nofegante\nofensiva\noferenda\noficina\nofuscado\nogiva\nolaria\n" +
  "oleoso\nolhar\noliveira\nombro\nomelete\nomisso\nomitir\nondulado\noneroso\nontem\nopcional\noperador\noponente\n" +
  "oportuno\noposto\norar\norbitar\nordem\nordinal\norfanato\norgasmo\norgulho\noriental\norigem\noriundo\norla\n" +
  "ortodoxo\norvalho\noscilar\nossada\nosso\nostentar\notimismo\nousadia\noutono\noutubro\nouvido\novelha\novular\n" +
  "oxidar\noxigenar\npacato\npaciente\npacote\npactuar\npadaria\npadrinho\npagar\npagode\npainel\npairar\n" +
  "paisagem\npalavra\npalestra\npalheta\npalito\npalmada\npalpitar\npancada\npanela\npanfleto\npanqueca\npantanal\n" +
  "papagaio\npapelada\npapiro\nparafina\nparcial\npardal\nparede\npartida\npasmo\npassado\npastel\npatamar\n" +
  "patente\npatinar\npatrono\npaulada\npausar\npeculiar\npedalar\npedestre\npediatra\npedra\npegada\npeitoral\n" +
  "peixe\npele\npelicano\npenca\npendurar\npeneira\npenhasco\npensador\npente\nperceber\nperfeito\npergunta\n" +
  "perito\npermitir\nperna\nperplexo\npersiana\npertence\nperuca\npescado\npesquisa\npessoa\npetiscar\npiada\n" +
  "picado\npiedade\npigmento\npilastra\npilhado\npilotar\npimenta\npincel\npinguim\npinha\npinote\npintar\n" +
  "pioneiro\npipoca\npiquete\npiranha\npires\npirueta\npiscar\npistola\npitanga\npivete\nplanta\nplaqueta\n" +
  "platina\nplebeu\nplumagem\npluvial\npneu\npoda\npoeira\npoetisa\npolegada\npoliciar\npoluente\npolvilho\n" +
  "pomar\npomba\nponderar\npontaria\npopuloso\nporta\npossuir\n" +
  "postal\npote\npoupar\npouso\npovoar\npraia\nprancha\nprato\npraxe\nprece\npredador\nprefeito\npremiar\nprensar\n" +
  "preparar\npresilha\npretexto\nprevenir\nprezar\nprimata\nprincesa\nprisma\nprivado\nprocesso\nproduto\nprofeta\n" +
  "proibido\nprojeto\nprometer\npropagar\nprosa\nprotetor\nprovador\npublicar\npudim\npular\npulmonar\npulseira\n" +
  "punhal\npunir\npupilo\npureza\npuxador\nquadra\nquantia\nquarto\nquase\nquebrar\nqueda\nqueijo\nquente\nquerido\n" +
  "quimono\nquina\nquiosque\nrabanada\nrabisco\nrachar\nracionar\nradial\nraiar\nrainha\nraio\nraiva\nrajada\n" +
  "ralado\nramal\nranger\nranhura\nrapadura\nrapel\nrapidez\nraposa\nraquete\nraridade\nrasante\nrascunho\n" +
  "rasgar\nraspador\nrasteira\nrasurar\nratazana\nratoeira\nrealeza\nreanimar\nreaver\nrebaixar\nrebelde\n" +
  "rebolar\nrecado\nrecente\nrecheio\nrecibo\nrecordar\nrecrutar\nrecuar\nrede\nredimir\nredonda\nreduzida\n" +
  "reenvio\nrefinar\nrefletir\nrefogar\nrefresco\nrefugiar\nregalia\nregime\nregra\nreinado\nreitor\nrejeitar\n" +
  "relativo\nremador\nremendo\nremorso\nrenovado\nreparo\nrepelir\nrepleto\nrepolho\nrepresa\nrepudiar\nrequerer\n" +
  "resenha\nresfriar\nresgatar\nresidir\nresolver\nrespeito\nressaca\nrestante\nresumir\nretalho\nreter\nretirar\n" +
  "retomada\nretratar\nrevelar\nrevisor\nrevolta\nriacho\nrica\nrigidez\nrigoroso\nrimar\nringue\nrisada\nrisco\n" +
  "risonho\nrobalo\nrochedo\nrodada\nrodeio\nrodovia\nroedor\nroleta\nromano\nroncar\nrosado\nroseira\nrosto\nrota\n" +
  "roteiro\nrotina\nrotular\nrouco\nroupa\nroxo\nrubro\nrugido\nrugoso\nruivo\nrumo\nrupestre\nrusso\nsabor\n" +
  "saciar\nsacola\nsacudir\nsadio\nsafira\nsaga\nsagrada\nsaibro\nsalada\nsaleiro\nsalgado\nsaliva\nsalpicar\n" +
  "salsicha\nsaltar\nsalvador\nsambar\nsamurai\nsanar\nsanfona\nsangue\nsanidade\nsapato\nsarda\nsargento\nsarjeta\n" +
  "saturar\nsaudade\nsaxofone\nsazonal\nsecar\nsecular\nseda\nsedento\nsediado\nsedoso\nsedutor\nsegmento\n" +
  "segredo\nsegundo\nseiva\nseleto\nselvagem\nsemanal\nsemente\nsenador\nsenhor\nsensual\nsentado\nseparado\n" +
  "sereia\nseringa\nserra\nservo\nsetembro\nsetor\nsigilo\nsilhueta\nsilicone\nsimetria\nsimpatia\nsimular\n" +
  "sinal\nsincero\nsingular\nsinopse\nsintonia\nsirene\nsiri\nsituado\nsoberano\nsobra\nsocorro\nsogro\nsoja\n" +
  "solda\nsoletrar\nsolteiro\nsombrio\nsonata\nsondar\nsonegar\nsonhador\nsono\nsoprano\nsoquete\nsorrir\nsorteio\n" +
  "sossego\nsotaque\nsoterrar\nsovado\nsozinho\nsuavizar\nsubida\nsubmerso\nsubsolo\nsubtrair\nsucata\nsucesso\n" +
  "suco\nsudeste\nsufixo\nsugador\nsugerir\nsujeito\nsulfato\nsumir\nsuor\nsuperior\nsuplicar\nsuposto\nsuprimir\n" +
  "surdina\nsurfista\nsurpresa\nsurreal\nsurtir\nsuspiro\nsustento\ntabela\ntablete\ntabuada\ntacho\ntagarela\n" +
  "talher\ntalo\ntalvez\ntamanho\ntamborim\ntampa\ntangente\ntanto\ntapar\ntapioca\ntardio\ntarefa\ntarja\ntarraxa\n" +
  "tatuagem\ntaurino\ntaxativo\ntaxista\nteatral\ntecer\ntecido\nteclado\ntedioso\nteia\nteimar\ntelefone\ntelhado\n" +
  "tempero\ntenente\ntensor\ntentar\ntermal\nterno\nterreno\ntese\ntesoura\ntestado\nteto\ntextura\ntexugo\n" +
  "tiara\ntigela\ntijolo\ntimbrar\ntimidez\ntingido\ntinteiro\ntiragem\ntitular\ntoalha\ntocha\ntolerar\ntolice\n" +
  "tomada\ntomilho\ntonel\ntontura\ntopete\ntora\ntorcido\ntorneio\ntorque\ntorrada\ntorto\ntostar\ntouca\n" +
  "toupeira\ntoxina\ntrabalho\ntracejar\ntradutor\ntrafegar\ntrajeto\ntrama\ntrancar\ntrapo\ntraseiro\ntratador\n" +
  "travar\ntreino\ntremer\ntrepidar\ntrevo\ntriagem\ntribo\ntriciclo\ntridente\ntrilogia\ntrindade\ntriplo\n" +
  "triturar\ntriunfal\ntrocar\ntrombeta\ntrova\ntrunfo\ntruque\ntubular\ntucano\ntudo\ntulipa\ntupi\nturbo\nturma\n" +
  "turquesa\ntutelar\ntutorial\nuivar\numbigo\nunha\nunidade\nuniforme\nurologia\nurso\nurtiga\nurubu\nusado\n" +
  "usina\nusufruir\nvacina\nvadiar\nvagaroso\nvaidoso\nvala\nvalente\nvalidade\nvalores\nvantagem\nvaqueiro\nvaranda\n" +
  "vareta\nvarrer\nvascular\nvasilha\nvassoura\nvazar\nvazio\nveado\nvedar\nvegetar\nveicular\nveleiro\nvelhice\n" +
  "veludo\nvencedor\nvendaval\nvenerar\nventre\nverbal\nverdade\nvereador\nvergonha\nvermelho\nverniz\nversar\n" +
  "vertente\nvespa\nvestido\nvetorial\nviaduto\nviagem\nviajar\nviatura\nvibrador\nvideira\nvidraria\nviela\nviga\n" +
  "vigente\nvigiar\nvigorar\nvilarejo\nvinco\nvinheta\nvinil\nvioleta\nvirada\nvirtude\nvisitar\nvisto\nvitral\n" +
  "viveiro\nvizinho\nvoador\nvoar\nvogal\nvolante\nvoleibol\nvoltagem\nvolumoso\nvontade\nvulto\nvuvuzela\n" +
  "xadrez\nxarope\nxeque\nxeretar\nxerife\nxingar\nzangado\nzarpar\nzebu\nzelador\nzombar\nzoologia\nzumbido"
).split("\n");

/**
 * @type {HTMLTextAreaElement}
 */
const seedInput = document.getElementById("seed");
/**
 * @type {HTMLPreElement}
 */
const resultOutput = document.getElementById("result");
const placeholderTextOutput = resultOutput.innerText;
/**
 * @type {HTMLButtonElement}
 */
const button = document.getElementById("btn");

function getNewWords() {
  return (seedInput.value || "")
    .split(/ /)
    .map((w) => (w ? w.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : w))
    .map((w) => newWordList[oldWordList.indexOf(w)])
    .map((w) => (w === undefined ? "<palavra inválida>" : w));
}

function convertWords() {
  try {
    const words = getNewWords() || [];
    resultOutput.innerText = words.join(" ") || placeholderTextOutput;
  } catch (error) {
    console.error(
      "Use um browser decente que aceite padrões de JS 2021+.",
      error
    );
    resultOutput.innerText = "Algo de errado aconteceu.\n" + error.toString();
  }
}

seedInput.addEventListener("keyup", convertWords);

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  convertWords();
});

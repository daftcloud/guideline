---
title: Les possibilités supplémentaires du modèle FRBR 
layout: default
nav_order: 2
---

# Les possibilités supplémentaires du modèle FRBR 

<p style="text-align:justify;">
L’interopérabilité des éditions critiques encodées en MEI repose sur l’adoption de normes partagées qui garantissent la cohérence et la compatibilité des fichiers produits. Actuellement, la grande liberté laissée aux encodeurs pour le renseignement des métadonnées dans le header MEI peut nuire à cette interopérabilité, en raison de choix individuels et des interprétations subjectives qui en résultent. Une telle hétérogénéité complique non seulement l’échange et l’exploitation des données, mais compromet également la transparence scientifique, un impératif fondamental des éditions critiques. Ce guide propose ainsi des exemples d'encodage standards ayant fait leurs preuves au sein de projets variés, mais également des alternatives s'inspirant de la norme FRBR ainsi que, le cas échéant, des alignements avec les clés de métadonnées HUMDRUM. Pour illustrer concrètement ces recommandations, des exemples détaillés sont intégrés au repository, accompagnés d’un modèle vierge prêt à l’emploi. 
</p>
<p style="text-align:justify;">
Notre protocole de complétion des headers est présenté de manière logique en abordant dans un premier temps les informations liées au fichier MEI encodé, ensuite à la définition de l'œuvre en elle-même avant de détailler la source. Bien que cette information ne respecte pas l'ordre des Guidelines MEI, elle nous semble conceptuellement logique et permet de révéler l'intérêt du modèle FRBR dans certains cas complexes de l'édition critique musicale.
</p>
<p style="text-align:justify;">
Historiquement, les besoins de l'édition critique textuelle se sont structurés à partir de deux modèles philologiques principaux : celui de Karl Lachmann dit méthode <em>stemmatique</em>, basé sur un processus d'élimination des erreurs communes entre les manuscrits, et celui de Bédier qui vise à l'usage d'un témoin unique. Ces méthodes et leurs dérivés convergent toutes vers la première étape nécessaire de la <em>recensio</em>, soit l'identification des sources. Dans le cadre de la présentation de notre protocole de renseignement des métadonnées au sein des headers MEI pour l'établissement d'éditions critiques, nous prenons donc appui sur la <em>recensio</em>, qui est renseignée soit de manière "classique" en MEI à travers <em>sourceDesc</em>, soit en suivant les différents états induits par le modèle FRBR. 
</p>
<p style="text-align:justify;">
Les quatre états de l'œuvre en FRBR sont légérèment adaptés en MEI, puisque "manifestation" devient <em>source</em>, tandis que <em>work</em>, <em>expression</em> et <em>item</em> restent inchangés. Chacun de ces éléments possède des balises "enfants" permettant de lister les différentes instanciations :
</p>

<p style="text-align:justify;">
   - <em>expressionList</em> : il s'agit de nommer et détailler les différentes expressions, cette étape correspondant dans notre protocole à la <em>recensio</em>. Nous avons fait le choix de nommer l'expression de tradition directe <em>expression 0</em>. On utilise 0 lorsque l'on est en presence de la source originale (normalement l'autographe de l'œuvre) et <em>omega</em> "⍵" lorsque la source originale de l'œuvre ne nous est pas parvenue, lorsqu'elle est <em>supposée</em>. Les expressions indirectes se déploient ensuite avec des chiffres (1,2 etc.) ou bien des noms en toutes lettres. Pour chaque expression il convient d'utiliser une instance de <em>expressionList</em> et pour chaque manifestation un <em>sourceList</em>. Dans le cadre de manuscrits, la manifestation et l'item ne font qu'un.
   - <em>sourceList</em> : de manière similaire à <em>expressionList</em>, nous nommons le manuscrit autographe (ou l'<em>omega</em> issu du <em>stemma codicum</em> si l'on ne possède pas l'autographe) <em>source 0</em>. 
   - <em>itemList</em> : il n'y a pas, pour des raisons de catalogage évidentes, d'<em>item 0</em> ; nous partons donc du principe que la dénomination des items fait appel au bon sens des chercheur·euse·s, de la tradition et des nomenclatures en usage.
</p>


<p style="text-align:justify;">
Le fichier MEI que nous sommes en train de renseigner constitue d'ailleurs une autre manifestation de l'œuvre, et doit par conséquent faire partie de la <em>sourceList</em>. Des xmlID seront utilisés pour chaque manifestation et item, afin d'assurer une inter-opérabilité maximale. Les normes FRBR ainsi intégrées de la MEI correspondent précisement à la <em>recensio</em> la plus complète possible, ce qui est la promesse méthodologique de chaque édition critique. L'emploi du modèle FRBR est ainsi particulièrement adapté à des œuvres éditées sous forme de conducteur d'orchestre puis de parties séparées, qui nécessitent par exemple de détailler les caractéristiques de chacune des éditions, ici qualifiées de "sources" (équivalent FRBR - MEI). Pour des éditions plus simples, il convient de faire preuve de bon sens et de privilégier les solutions natives à la MEI.
</p>
<p style="text-align:justify;">
Il est également important de noter que notre protocole s'appuie sur un principe de redondance : toutes les informations nécessaires doivent être renseignées à chaque niveau du header et, le cas échéant, du modèle FRBR. Il est ainsi probable que des métadonnées soient régulièrement répétées, par exemple le nom du compositeur ou le titre de l’œuvre.
</p>
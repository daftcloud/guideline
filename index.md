---
title: Guideline
layout: home
---

This is a *bare-minimum* template to create a Jekyll site that uses the [Just the Docs] theme. You can easily set the created site to be published on [GitHub Pages] – the [README] file explains how to do that, along with other details.

If [Jekyll] is installed on your computer, you can also build and preview the created site *locally*. This lets you test changes before committing them, and avoids waiting for GitHub Pages.[^1] And you will be able to deploy your local build to a different platform than GitHub Pages.

More specifically, the created site:

- uses a gem-based approach, i.e. uses a `Gemfile` and loads the `just-the-docs` gem
- uses the [GitHub Pages / Actions workflow] to build and publish the site on GitHub Pages

Other than that, you're free to customize sites that you create with this template, however you like. You can easily change the versions of `just-the-docs` and Jekyll it uses, as well as adding further plugins.

[Browse our documentation][Just the Docs] to learn more about how to use this theme.

To get started with creating a site, simply:

1. click "[use this template]" to create a GitHub repository
2. go to Settings > Pages > Build and deployment > Source, and select GitHub Actions

If you want to maintain your docs in the `docs` directory of an existing project repo, see [Hosting your docs from an existing project repo](https://github.com/just-the-docs/just-the-docs-template/blob/main/README.md#hosting-your-docs-from-an-existing-project-repo) in the template README.

----

[^1]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[GitHub Pages]: https://docs.github.com/en/pages
[README]: https://github.com/just-the-docs/just-the-docs-template/blob/main/README.md
[Jekyll]: https://jekyllrb.com
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
[use this template]: https://github.com/just-the-docs/just-the-docs-template/generate
## Approches de la complétion des Headers MEI par les GT1&GT2 du Consortium-HN Musica2
Balland Chatignon, A. (CNRS, Musica2, IReMus & MSH Lorraine) Bottini, T. (CNRS, IReMus), Braud, A. (CNRS, RicercarLab), Gurrieri, M. (CNRS, IReMus), Roger, K. (ULorraine, CRULH)

### 1. Présentation générale de l'approche méthodologique
<p style="text-align:justify;">
Ce document didactique élaboré dans le cadre du consortium Huma-Num Musica2 vise à proposer un protocole détaillé de renseignement des métadonnées au sein des headers MEI (Music Encoding Initiative), plus particulièrement dans le cadre d'éditions critiques numériques. L’objectif est d'établir un guide dédié aux éditions encodées en MEI et de préciser où disposer les informations éditoriales et philologiques nécessaires, en proposant des choix raisonnés palliant diverses ambiguïtés présentes dans les guidelines MEI. Fixer des paramètres partagés et reconnus par la communauté musicologique permettra de créer des fichiers MEI qui pourront être contrôlés, vérifiés et échangés au profit de la transparence scientifique et de l'interopérabilité. 
</p>
<p style="text-align:justify;">
L'édition critique pose un nombre significatif de problèmes, notamment dans les cas où il est nécessaire de marquer la différence entre tradition directe (tous les exemplaires transmettant le texte sous sa forme originelle) ou indirecte (exemplaires qui témoignent d'une tradition en parallèle : les traductions, les commentaires, les parodies, etc...). Ces derniers sont particulièrement utiles lorsqu'un texte est corrompu, car ils donnent une fenêtre sur un moment historique précis où le texte était intouché. 
</p>
<p style="text-align:justify;">
Dans le cas précis de l'édition musicale, les problématiques d'arrangement, de transcription d'une formation instrumentale à une autre ainsi que la reconstruction des voix posent des problèmes conséquents qui justifient une approche détaillée bien que parfois redondante.
</p>

### 2. Les possibilités supplémentaires du modèle FRBR 

<p style="text-align:justify;">
L’interopérabilité des éditions critiques encodées en MEI repose sur l’adoption de normes partagées qui garantissent la cohérence et la compatibilité des fichiers produits. Actuellement, la grande liberté laissée aux encodeurs pour le renseignement des métadonnées dans le header MEI peut nuire à cette interopérabilité, en raison de choix individuels et des interprétations subjectives qui en résultent. Une telle hétérogénéité complique non seulement l’échange et l’exploitation des données, mais compromet également la transparence scientifique, un impératif fondamental des éditions critiques. Ce guide propose ainsi des exemples d'encodage standards ayant fait leurs preuves au sein de projets variés, mais également des alternatives s'inspirant de la norme FRBR ainsi que, le cas échéant, des alignements avec les clés de métadonnées HUMDRUM. Pour illustrer concrètement ces recommandations, des exemples détaillés sont intégrés au repository, accompagnés d’un modèle vierge prêt à l’emploi. 
</p>
<p style="text-align:justify;">
Notre protocole de complétion des headers est présenté de manière logique en abordant dans un premier temps les informations liées au fichier MEI encodé, ensuite à la définition de l'œuvre en elle-même avant de détailler la source. Bien que cette information ne respecte pas l'ordre des Guidelines MEI, elle nous semble conceptuellement logique et permet de révéler l'intérêt du modèle FRBR dans certains cas complexes de l'édition critique musicale.
</p>
<p style="text-align:justify;">
Historiquement, les besoins de l'édition critique textuelle se sont structurés à partir de deux modèles philologiques principaux : celui de Karl Lachmann dit méthode _stemmatique_, basé sur un processus d'élimination des erreurs communes entre les manuscrits, et celui de Bédier qui vise à l'usage d'un témoin unique. Ces méthodes et leurs dérivés convergent toutes vers la première étape nécessaire de la _recensio_, soit l'identification des sources. Dans le cadre de la présentation de notre protocole de renseignement des métadonnées au sein des headers MEI pour l'établissement d'éditions critiques, nous prenons donc appui sur la _recensio_, qui est renseignée soit de manière "classique" en MEI à travers _sourceDesc_, soit en suivant les différents états induits par le modèle FRBR. 
</p>
<p style="text-align:justify;">
Les quatre états de l'œuvre en FRBR sont légérèment adaptés en MEI, puisque "manifestation" devient _source_, tandis que _work_, _expression_ et _item_ restent inchangés. Chacun de ces éléments possède des balises "enfants" permettant de lister les différentes instanciations :
</p>
<p style="text-align:justify;">
   - _expressionList_ : il s'agit de nommer et détailler les différentes expressions, cette étape correspondant dans notre protocole à la _recensio_. Nous avons fait le choix de nommer l'expression de tradition directe _expression 0_. On utilise 0 lorsque l'on est en presence de la source originale (normalement l'autographe de l'œuvre) et _omega_ "⍵" lorsque la source originale de l'œuvre ne nous est pas parvenue, lorsqu'elle est _supposée_. Les expressions indirectes se déploient ensuite avec des chiffres (1,2 _etc_) ou bien des noms en toutes lettres. Pour chaque expression il convient d'utiliser une instance de _expressionList_ et pour chaque manifestation un _sourceList_. Dans le cadre de manuscrits, la manifestation et l'item ne font qu'un.
   - _sourceList_ : de manière similaire à _expressionList_, nous nommons le manuscrit autographe (ou l'_omega_ issu du _stemma codicum_ si l'on ne possède pas l'autographe) _source 0_. 
   - _itemList_ : il n'y a pas, pour des raisons de catalogage évidentes, d'_item 0_ ; nous partons donc du principe que la dénomination des items fait appel au bon sens des chercheur·euse·s, de la tradition et des nomenclatures en usage.
</p>
<p style="text-align:justify;">
Le fichier MEI que nous sommes en train de renseigner constitue d'ailleurs une autre manifestation de l'œuvre, et doit par conséquent faire partie de la _sourceList_. Des xmlID seront utilisés pour chaque manifestation et item, afin d'assurer une inter-opérabilité maximale. Les normes FRBR ainsi intégrées de la MEI correspondent précisement à la _recensio_ la plus complète possible, ce qui est la promesse méthodologique de chaque édition critique. L'emploi du modèle FRBR est ainsi particulièrement adapté à des œuvres éditées sous forme de conducteur d'orchestre puis de parties séparées, qui nécessitent par exemple de détailler les caractéristiques de chacune des éditions, ici qualifiées de "sources" (équivalent FRBR - MEI). Pour des éditions plus simples, il convient de faire preuve de bon sens et de privilégier les solutions natives à la MEI.
</p>
<p style="text-align:justify;">
Il est également important de noter que notre protocole s'appuie sur un principe de redondance : toutes les informations nécessaires doivent être renseignées à chaque niveau du header et, le cas échéant, du modèle FRBR. Il est ainsi probable que des métadonnées soient régulièrement répétées, par exemple le nom du compositeur ou le titre de l’œuvre.
</p>


### 3. L'autorité

<p style="text-align:justify;">
La manière de lier les données avec des catalogues d'autorités se retrouve un peu partout dans les guidelines. Rappeller dans ce passage, comme le montre les exemples de music-enfonding.org, d'utiliser les attributs @auth (pour les sigles des organismes d'autorité), @auth.uri (pour la base de l'uri utilisé par l'organisme) et @codedval (pour la valeur de la donnée liée.)
</p>

### 4. Description du fichier MEI encodé <fileDesc>
#### a. Titre
##### Titre de l'édition MEI
<a id="OTL_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Titre|≈ OTL|




Balise :`<title type=main>`/`<title type="subordinate">`

Autre option : `<title>`

<p style="text-align:justify;">
Recommandations : Le titre est une information souvent ambiguë dans les éditions numériques en raison de la confusion qui règne entre le titre de l'oeuvre complète, le titre de la partie encodée ou encore le titre de l'édition. D'ailleurs, le vocabulaire Humdrum ne dispose pas de clé spécifique pour cette dernière valeur (OTL est le titre de l'œuvre, pas de l'édition numérique de cette œuvre). En MEI, dans &lt;fileDesc&gt;, les usages sont nombreux et divergent. Pourtant, il est manifeste que la balise &lt;title&gt; à l'intérieur de &lt;fileDesc&gt; se réfère au titre de l'édition numérique qui peut être distinct du titre de l'oeuvre encodée, mais en pratique, ces deux niveaux de titres se superposent souvent. Ainsi, pour distinguer le titre de l'édition et celui de la pièce (proprement encodé dans &lt;workList&gt;), nous proposons d'observer l'un des conseils donnés dans les guidelines tout en en uniformisant l'encodage. Ainsi, le &lt;title&gt; principal est suivi d'un &lt;title&gt; subordonné précisant que l'objet est ici l'édition numérique et non l'oeuvre en elle-même.
</p>

Exemple :
```
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <title type="main">Pavane</title>
      <title type="subordinate">A Digital Edition</title>
   </titleStmt>
</fileDesc>
```
Recommandations : Dans &lt;fileDesc&gt;, il n'est pas nécessaire que le titre dispose d'une granularité fine comparable au renseignement du titre de l'oeuvre dans &lt;workList&gt;. Il n'existe cependant aucune restriction. Le plus important est de rester vigilant quant à la hiérarchie des titres spécifiée à l'aide de l'attribut @title dont les valeurs sont contrôlées (pour plus d'information sur les niveaux de titres, voir "Titre alternatif de l'oeuvre").

#### b. Compositeur
##### Compositeur de l'édition MEI encodée
<a id="COM_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Indique le nom du compositeur de l'œuvre.|COM|



Balise :
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <composer xml:id="...">
          <persName role="creator" auth="..." auth.uri="http://..." codedval="...">...</persName>
      </composer>
   </titleStmt>
</fileDesc>

Recommandations : Le ou les compositeurs renseignés ici ne concernent que l'oeuvre encodée dans le fichier MEI et non une oeuvre tierce. À noter également que la valeur de rôle est libre. Toutefois, il est conseillé de suivre un thesaurus ou un vocabulaire contrôlé dans un souci de standardisation tels que [VIAF](https://www.oclc.org/fr/viaf.html) Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées (ici aussi, préciser). 

Exemple :
```
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
       <composer xml:id="...">
          <persName role="creator" auth="..." auth.uri="http://..." codedval="...">...</persName>
       </composer>
   </titleStmt>
</fileDesc>
```

##### Compositeur attribué à l'édition MEI encodée
<a id="COA_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Désigne un compositeur attribué sur la base de preuves internes, externes ou par conjecture.|COA|



Balise : `<composer evidence="...">` 

Autre option : `<persName>`

Recommandations : La provenance de l’attribution doit être précisée à l'aide de l'attribut @evidence et des valeurs suivantes="internal, external, conjecture".  

Exemple :
```
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <composer xml:id="..." evidence="..." (internal, external or conjecture)>
          <persName role="attributed creator" ("attributed composer"?) auth="..." auth.uri="http://..." codedval="...">...</persName>
      </composer>
   </titleStmt>
</fileDesc>
```
#### c. Informations liées à l'édition
##### Éditeur de l'édition électronique 
<a id="YEP_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Éditeur de l'édition électronique |YEP|
 
 

 Balise : 
 (ancienne propal)
<fileDesc>
  <titleStmt>
    <respStmt>
       <persName xml:id="VB" role="editor" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
    
<fileDesc>
   <titleStmt>
      <editor>
         <persName xml:id="VB" role="editor" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
      </editor>
   </titleStmt>
</fileDesc>

Recommandations : 

Exemple :
```
<fileDesc>
  <titleStmt>
    <respStmt>
       <persName xml:id="VB" role="editor" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
    </respStmt>
```

##### Date et propriétaire du copyright de l'édition électronique
<a id="YEC_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement)|Date et propriétaire du copyright de l'édition électronique|YEC|



Balise : 
<fileDesc>
   <pubStmt>
      <availability>
      <useRestrict>
         <persName/>
         <corpName/>
         <date isodate="...">...</date>
      </useRestrict>
      </availability>
   </pubStmt>
</fileDesc>

Recommandations : La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise <date> est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".

Exemple :
```
<fileDesc>
   <pubStmt>
      <availability>
      <useRestrict>
         <persName>...</persName>
         <corpName>...</corpName>
         <date isodate="2024">2024</date>
      </useRestrict>
      </availability>
   </pubStmt>
</fileDesc>
```


<a id="ENC_ref1"></a>
 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement)|Encodeur de l'édition électronique|ENC|



Balise : 
<fileDesc>
   <titleStmt>
      <respStmt>
         <persName xml:id="VB" role="encoder" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
      </respStmt>
   </titleStmt>
</fileDesc>
   

Recommandations : 

Exemple :
```
<fileDesc>
   <titleStmt>
      <respStmt>
         <persName xml:id="VB" role="encoder" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
      </respStmt>
   </titleStmt>
</fileDesc>
```

##### Date d'encodage de l'édition électronique
<a id="END_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement)|Date d'encodage de l'édition électronique|END|



Balise : 
<fileDesc>
   <pubStmt>
      <date isodate="...">...</date>
   </pubStmt>
</fileDesc>

Autre option : 

Recommandations : La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;date&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension.

Exemple :
```
<fileDesc>
   <pubStmt>
      <date isodate="1878-04-13">13 avril 1875</date>
   </pubStmt>
</fileDesc>
```

##### Modification du document électronique
<a id="EMD_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.3 Revision Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerRevisionDescription)|Modification du document électronique|EMD|



Balise : 
<revisionDesc>
   <change n="X">
   <date isodate="..."/>
   <resp target="#xmlID">...</resp>
   </change>
</revisionDesc>

Recommandations : À chaque nouvelle édition du fichier, il est recommandé de dresser une description des changements, une date de la nouvelle édition et les personnes ou logiciels impliqué dans les changements. Il est également recommandé que les changements soient présentés dans un ordre anti-chronologique.

Exemple :
```
 <revisionDesc>
   <change n="2">
      <p>Music correction</p>
      <date isodate="2023-08-22"/>
      <resp target="#ABChatignon">Balland Chatignon, Aurélien</resp>
      </change>
   <change n="1">
      <p>Creation of metadata by extraction from Gallica</p>
      <date isodate="2023-08-22"/>
      <resp>GallicOvuM</resp>
   </change>
</revisionDesc>
```

##### Version de l'édition électronique
<a id="EEV_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.3 Revision Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerRevisionDescription)|Version de l'édition électronique|EEV|



Balise : 
<revisionDesc>
   <change n="X">
   <date/>
   <resp target="#xmlID">...</resp>
   </change>
</revisionDesc>

Autre option : 
<encodingDesc n="X"> ???

Recommandations : À chaque nouvelle édition du fichier, il est recommandé de dresser une description des changements, une date de la nouvelle édition et les personnes ou logiciels impliqué dans les changements.

Exemple :
```
 <revisionDesc>
   <change n="2">
      <p>Music correction</p>
      <date isodate="2023-08-22"/>
      <resp target="#ABChatignon">Balland Chatignon, Aurélien</resp>
      </change>
   <change n="1">
      <p>Creation of metadata by extraction from Gallica</p>
      <date isodate="2023-08-22"/>
      <resp>GallicOvuM</resp>
   </change>
</revisionDesc>
```

##### Numéro du fichier électronique
<a id="EFL_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement)|Numéro du fichier électronique|EFL|



Balise :
 <fileDesc>
 ...
   <seriesStmt @precedes="link vers 3" @follows="link vers 1">
      <title>(titre de la série)</title>
      <identifier>numéro du fichier éléctronique dans cette série</identifier>

Recommandations : 
Lorsque le fichier mei que nos encodons fait parti d'une suite de fichier, nous recommandons d'indiquer les informations concernant cette suite dans l'élément seriesStmt inclus dans fileDesc.


Exemple (fictif) :
```
<seriesStmt @precedes="Bieber_Sonates_du_Rosaire/Ascension.mei" @follows="Bieber_Sonates_du_Rosaire/Crucifixion.mei">
      <title>Les Sonates du Rosaire</title>
      <identifier>11</identifier>
```

##### État de l'encodage
<a id="EST_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.2. Encoding Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerEncodingDescription)|État de l'encodage|EST|



# ¿ ! ? État de l'encodage est-il pertinent à garder ?
Sous Humdrum : EST Encoding status. This record indicates the current status of the document as it is being produced. Free-format text may indicate that the encoding is in-progress, list tasks remaining, or indicate that the encoding is complete. EST records are normally eliminated prior to distribution of the document.

Il ne me semble pas pertinent de conserver ce point. L'objectif d'un guide des bonne pratiques vise à mutualiser les processus d'encodage de partition MEI afin de permettre le moissonnement de différents projets utilisant MEI pour produire ses partitions. Il ne me semble pas pertinent de traiter des informations en lien avec la phase de production qui a vocation à dis^paraitre à la publication. 

Balise : 
<encodingDesc>
Exemple :
```
<encodingDes>
```

##### Désignation de la forme
<a id="AFR_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.12 Classification](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkClass)|Désignation de la forme|AFR|



Balise : 

<classification>
   <termList>
      <term class="#...">...</term>
   </termList>
</classification>

Autre option : 

Recommandations : 
Que ce soit dans l'élément work, expression, manifestation ou item, la désignation de la forme s'inscrit dans l'élément classification. Nous recommandons de tisser un lien vers des <taxonomy> dans l'élément <classDecls> contenu dans <encodingDesc> vers des vocabulaires controllés.

Exemple :

##### Date de mise à disposition de l'édition électronique
<a id="YER_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement)|Date de mise à disposition de l'édition électronique|YER|



Balise : 
<pubStmt>
   <availability>
     <useRestrict>
        <date isodate="...">...</date>
     </useRestrict>
   </availability>
</pubStmt>

Recommandations : 

Exemple :
```
<pubStmt>
   <availability>
     <useRestrict>
        <persName>...</persName>
        <corpName>...</corpName>
        <date isodate="2024">2024</date>
     </useRestrict>
   </availability>
</pubStmt>
```

##### License
<a id="YEM_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.3 Publication, Distribution, etc.](https://music-encoding.org/guidelines/v5/content/metadata.html#headerPublicationDistribution)|License|YEM|



Balise : 
<pubStmt>
   <availability>
     <useRestrict>
        <persName>...</persName>
        <corpName>...</corpName>
        <date isodate="2024">2024</date>
        <head>Licence</head>
        <p>CC-BY-NC</p>
     </useRestrict>
   </availability>
</pubStmt>

Autre option : 
<pubStmt xml : id…>
    <availability xml : id…>
       <useRestrict xml : id…>Licence:... </useRestrict>
    </availability>
</pubStmt>

Exemple :
```
<pubStmt>
   <availability>
     <useRestrict>
        <persName>...</persName>
        <corpName>...</corpName>
        <date isodate="2024">2024</date>
        <head>Licence</head>
        <p>CC-BY-NC</p>
     </useRestrict>
   </availability>
</pubStmt>
```

##### Pays de copyright
<a id="YEN_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Pays de copyright|YEN|



Balise : <pubStmt>
   <availability>
     <useRestrict>
        <persName>...</persName>
        <corpName>...</corpName>
        <country>France</country>
        <date isodate="2024">2024</date>
        <head>Licence</head>
        <p>CC-BY-NC</P>
     </useRestrict>
     <date isodate="2024-01-02">01/02/24</date>
   </availability>
</pubStmt>
Exemple :
```
<pubStmt>
   <availability>
     <useRestrict>
        <persName>...</persName>
        <corpName>...</corpName>
        <country>France</country>
        <date isodate="2024">2024</date>
        <head>Licence</head>
        <p>CC-BY-NC</P>
     </useRestrict>
   </availability>
</pubStmt>
```

### 5. Description de l'œuvre musicale <worklist>

#### a. Titre
##### Titre de l'œuvre musicale
<a id="OTL_ref2"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Titre de l'œuvre|≈ OTL|



Balise :`<title type=main>`/`<title type="subordinate">`

Autre option : `<title>`

Recommandations : Les deux exemples ci-dessous explicitent l'inscription du titre de l'œuvre dans un premier temps au niveau de l'œuvre elle-même, puis au niveau de son expression.

Exemples :
```
"<workList xml:id=""..."">
   <work xml:id=""..."">
      <title xml:id=""..."">...</title>
   </work>
</workList>"
```
```
"<workList xml:id=""..."">
   <work xml:id=""..."">
      <title xml:id=""..."">  
      <expressionList xml:id=""..."">  
        <expression xml:id=""..."">
        </expression>
      </expressionList>
      </title>
   </work>
</workList>"
```

##### Titre de l'oeuvre 
<a id="OTL_ref3"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription)|Titre de l'oeuvre encodée.|OTL|



Balise :`<title>`

Autre option : -

Recommandations : Cette manière minimale de renseigner le titre convient surtout aux titres officiels et consensuels des oeuvres - des titres qui ne font pas l'objet d'ambiguité. Pour le renseignement de titres alternatifs ou populaires, voir plus bas.

Exemple :

Titre simple d'une oeuvre :
```
<workList xml:id="...">
   <work xml:id="...">
      <title xml:id="...">Pavane pour une infante défunte</title>
   </work>
</workList>
```

Recommandation : Dans le cas de sections ou de mouvements d'une oeuvre, il est nécessaire de faire une distinction entre le titre de la partie encodée et l'oeuvre globale. Pour cela, il est nécessaire d'utiliser l'attribut @type et la valeur "uniform". De même, afin de mieux catégoriser les différents niveaux de titres, il est conseillé d'employer <titlePart>. La valeur "subordinate" peut être pratique pour hiérarchiser les divers syntagmes d'un même niveau de titre, comme le mouvement ou numéro d'opus.

##### Titre d'un mouvement d'une oeuvre 

```
<workList xml:id="...">
   <work xml:id="...">
      <title type="main">Rondo alla Turca</title>
      <title type="subordinate" label="movement">Allegretto</title>
      <titlePart>
         <title type="uniform">Sonate pour piano no. 11 en la majeur</title>
         <title type="subordinate" label="Köchel">K. 331/300</title>
      </titlePart>
   </work>
</workList>
```
Recommandation : Il est à noter que le renseignement du titre, métadonnée de première importance, est paradoxalement négligé dans les guidelines MEI. Divers exemples suggèrent une distinction minimale des niveaux de titres et une certaine liberté dans leur troncation. La raison réside certainement dans l'ambiguïté qui dérive des différentes formes de titres et de leurs usages multiples. Bien que @type soit régi par les valeurs contrôlées listées ci-dessus, les guidelines illustrent à l'occasion l'usage non conventionnel de @type="subtitle" pour encoder un syntagme subordonné au titre principal. Nous nous limiterons ici aux seuls vocables contrôlés précisés précédemment.

##### Titre courant de l'oeuvre
<a id="OTP_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 | - |Titre populaire de l'oeuvre encodée.|OTP|



Balise : `<title type="alternative">`

Autre option : -

Recommandations : Le titre courant peut facilement se confondre avec le titre alternatif (voir ci-dessous). Sur ce point, seuls les usages peuvent apporter des réponses. Dans le doute, il est préférable de privilégier le titre alternatif, moins restrictif que le sens sous-entendu par titre "courant". Par ailleurs, @type dispose de valeurs contrôlées en MEI ("main", "subordinate", "abbreviated", "alternative", "translated", "uniform" et "desc") parmi lesquelles aucune ne couvre l'acception d'un titre "populaire". Pour l'usage de ces valeurs, voir ci-dessous dans "Titre alternatif de l'oeuvre"

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <title type="main">Rondo alla Turca</title>
      <title type="subordinate" label="movement">Allegretto</title>
      <title type="alternative">Marche Turque</title>
      <titlePart>
         <title type="uniform">Sonate pour piano no. 11 en la majeur</title>
         <title type="subordinate" label="Köchel">K. 331/300</title>
      </titlePart>
   </work>
</workList>
```

##### Titre alternatif de l'oeuvre
<a id="OTA_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Autre titre de l'oeuvre encodée, distinct du titre principal.|OTA|



Balise : `<title type="alternative">`

Autre option, en fonction du contexte : `<title type="subordinate">`; `<title type="abbreviated">`; `<title type="translated">`; `<title type="uniform">`; `<title type="desc">`

Recommandations : Comme dit plus haut, l'attribut "alternative" demeure le plus simple pour renseigner un titre différent du titre officiel de l'oeuvre encodée. Toutefois, l'attribut @type dispose d'autres valeurs contrôlées, listées précédemment, qui peuvent affiner la nature du titre renseigné. Ainsi, dans l'exemple ci-dessous, apparaissent deux niveaux de titres (titre du mouvement encodé et titre de l'oeuvre globale) ainsi que leurs diverses formes potentielles.

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <title type="main">Rondo alla Turca</title>
      <title type="subordinate" label="movement">Allegretto</title>
      <title type="abbreviated">Alla Turca</title>
      <title type="alternative">Marche Turque</title>
      <titlePart>
         <title type="uniform">Sonate pour piano no. 11 en la majeur</title>
         <title type="subordinate" label="Köchel">K. 331/300</title>
         <title type="translated" xml:lang="DE">Sonate Nr. 11 A-Dur</title>
         <title type="desc">Sonate pour piano très connue de Mozart</title>
      </titlePart>
   </work>
</workList>
```

##### Titre de l'œuvre d'appartenance
<a id="OPR_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Titre de l'œuvre globale dans le cas d'une section ou d'un mouvement.|OPR|



Balise : `<title type="main">` ; `<title type="uniform">`

Autre option : 

Recommandations : Comme dit précédemment, si diverses formes de titre sont retenues dans l'édition, il est conseillé de structurer les différents niveaux à l'aide de <titlePart>, surtout si des valeurs semblables pour @type sont utilisées à la fois pour le titre du mouvement et pour le titre de l'oeuvre d'appartenance. Dans l'exemple ci-dessous, la description minimale ne nécessite pas une telle distinction.  

Exemple :
```
<workList>
   <work>
      <title type="main">Rondo alla Turca</title>
      <title type="abbreviated">Alla Turca</title>
      <title type="alternative">Marche Turque</title>
      <title type="uniform">Sonate pour piano no. 11 en la majeur</title>
   </work>
</workList>  
```
#### b. Compositeur, librettiste, _etc._
##### Compositeur de l'œuvre musicale
<a id="COM_ref2"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription)|Indique le nom du compositeur de l'œuvre.|COM|



Balise : `<composer>`

Autre option : `<persName role="creator">`

Recommandations : Le ou les compositeurs renseignés ici ne concernent que l'oeuvre encodée dans le fichier MEI et non une oeuvre tierce. À noter également que la valeur de rôle est libre. Toutefois, il est conseillé de suivre un thesaurus ou un vocabulaire contrôlé dans un souci de standardisation tels que [VIAF](https://www.oclc.org/fr/viaf.html). Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées (ici aussi, préciser). 

Exemples :
```
<workList xml:id=""..."">
   <work xml:id=""..."">
      <composer xml:id=""..."">
          <persName role=""creator"" ("composer") auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="...">...</persName>
      </composer>
   </work>
</workList>
```
```
"<workList xml:id=""..."">
   <work xml:id=""..."">
      <expressionList xml:id=""..."">  
        <expression xml:id=""..."">
          <composer xml:id=""..."">
            <persName role=""creator"" ("composer"?) auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="..." >...</persName>
          </composer>
        </expression>
      </expressionList>
   </work>
</workList>"
```

Dans le cas de plusieurs compositeurs, recourir à une numération dans le cadre de role ou de l'xml id. Ex :

`<persName role="creator1">`

##### Compositeur attribué
<a id="COA_ref2"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription)|Désigne un compositeur attribué sur la base de preuves internes, externes ou par conjecture.  | COA |



Balise : `<composer evidence="...">` 

Autre option : `<persName>`

Recommandations : La provenance de l’attribution doit être précisée à l'aide de l'attribut @evidence et des valeurs suivantes="internal, external, conjecture".  

Exemple :
```
<workList xml:id=""..."">
   <work xml:id=""..."">
      <composer xml:id=""..."" evidence=""..."" (internal, external or conjecture)>
          <persName auth="..." auth.uri="http://..." codedval="...">...</persName>
      </composer>
   </work>
</workList>
```

##### Compositeur soupçonné
<a id="COS_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription)|Désigne un compositeur soupçonné avec un niveau de certitude.|COS|



Balise : `<composer>`

Autre option : `<persName>`

Recommandations : Il est conseillé d’utiliser l’attribut @cert pour indiquer le degré de certitude. Les valeurs autorisées sont : high, 
medium, low ou unknown.

Exemple:
```
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="..." cert="low">
          <persName role="suspected creator" auth="..." auth.uri="http://..." codedval="...">Nom soupçonné</persName>
      </composer>
   </work>
</workList>
```

##### Alias ou pseudonyme du compositeur
<a id="COL_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription)|Indique un alias ou pseudonyme d’un compositeur.|COL|



Balise : `<persName>` et `<foreName>`

Autre option : `<foreName>` et `<famName>`

Recommandations : Peut être utilisé pour les noms d’emprunt, les noms de plume ou les pseudonymes historiques. Il est à noter que d'autres balises peuvent couvrir des sens de nomination plus fins : famName, genName, addName, genName, nameLink, et roleName. Leur gestion est sensiblement identique à celle de <foreName>.

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="...">
          <persName role="creator" auth="..." auth.uri="http://..." codedval="...">Nom réel</persName>
          <persName>
            <foreName>Alias</foreName>
          </persName>  
      </composer>
   </work>
</workList>
```

##### Dates de naissance et de décès du compositeur
<a id="CDT_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Indique les dates de naissance et de décès du compositeur.|CDT|



Balise : `<persName>` avec les attributs @startdate et @enddate.

Recommandations : Peut être omis si le compositeur est référencé avec une URI externe.

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="...">
          <persName startdate="1685" enddate="1750" auth="..." auth.uri="http://..." codedval="...">Nom du compositeur</persName>
      </composer>
   </work>
</workList>
```

##### Nationalité du compositeur
<a id="CNT_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription)|Indique la nationalité du compositeur.|CNT|



Balise : `<annot>` 

Recommandations : Peut être omis si le compositeur est référencé avec une URI externe.

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="...">
          <persName auth="..." auth.uri="http://..." codedval="...">Nom du compositeur</persName>
          <annot label="nationality">Français</annot>
      </composer>
   </work>
</workList>
```

##### Lieu de naissance et de décès d'un compositeur
<a id="CBL_ref1"></a>
<a id="CDL_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Indique le lieu de naissance et de décès d'un compositeur.|CBL et CDL|



Balise : `<persName>` et `<date>` avec les attributs @startdate et @enddate.

Recommandations : Peut être omis si le compositeur est référencé avec un URI externe. Il est conseillé d'utiliser un URI, via @auth.uri, pour préciser le lieu. Nous préconisons l'usage d'un URI GeoNames.  

Exemple :
```
<workList xml:id=""..."">
   <work xml:id=""..."">
      <composer xml:id=""..."">
          <persName auth="..." auth.uri="http://..." codedval="...">...</persName>
          <date stardate=""..."">
             <country auth="..." auth.uri="..." codedval="...">XXX</country>
          </date>
          <date enddate=""..."">
             <country>XXX</country>
         </date>     
      </composer>
   </work>
</workList>
```
##### Nom du librettiste
<a id="LIB_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Indique le nom du librettiste de l'oeuvre. |LIB|



Balise : `<librettist>`

Autre option : `<persName role="librettist">`

Exemple :
```
<workList xml:id=""..."">
   <work xml:id=""..."">
      <librettist>
         <persName auth="..." auth.uri="..." codedval="..."></persName>
      </librettist>   
   </work>
</workList>
```

##### Nom de l'arrangeur 
<a id="LAR_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription)|Indique le nom de l'arrangeur de l'oeuvre. |LAR|



Balise : `<arranger>`

Autre option : `<persName role="arranger">`

Recommandations : Suivant les guidelines MEI pour <arranger>, il est uniquement question du sens "classique" de la fonction - celui qui transcrit la pièce pour une nomenclature musicale différente de l'originale. Pour "orchestrateur", voir ci-dessous.

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <arranger>
         <persName auth="..." auth.uri="..." codedval="..."></persName>
      </arranger>   
   </work>
</workList>
```

##### Nom de l'orchestrateur 
<a id="LOR_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)| Indique le nom de l'orchestrateur de l'oeuvre. |LOR|



Définition :

Balise : `<arranger role="orchestrator">`

Autre option : `<persName role="orchestrator">`

Recommandations : Comme dit ci-dessus, <arranger> représente uniquement le sens "classique" de la fonction : la personne qui transcrit la pièce pour une nomenclature musicale différente de l'originale. Il est donc nécessaire de préciser à l'aide de @role la qualité spécifique de l'arrangeur.  Dans la mesure où "orchestrator" n'est pas présent dans les Marc Relators, nous proposons de nous appuyer sur le vocabulaire Doremus des fonctions, comprenant "arranger" ainsi que de nombreuses sous-fonctions comme "orchestrator", "creator_of_musical_harmonization" ou encore "creator_of_musical_paraphrase" (https://github.com/DOREMUS-ANR/knowledge-base/blob/master/vocabularies/function.ttl).

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <arranger>
         <persName role="orchestrator" auth="..." auth.uri="..." codedval="..."></persName>
      </arranger>   
   </work>
</workList>
```
##### Langue originaire du texte
<a id="TXO_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.6 Language Usage](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkLanguage)| Indique la langue originale de l'oeuvre encodée.|TXO|




Définition :




Balise : `<langUsage>/<language>`

Autre option : -

Recommandations : <langUsage> contient l'ensemble des langues devant être décrites dans le fichier MEI. Dans le cas d'une seule langue renseignée, ici la langue originale, il n'apparait pas nécessaire de s'encombrer d'un attribut le précisant (comme dans l'exemple ci-dessous). Pour la distinction de plusieurs langues dans le cas de traductions ou d'adaptations, voir ci-dessous. 

Il est cependant conseillé, pour des questions d'interopérabilité, d'ajouter l'identifiant ISO de la langue renseignée à l'aide des attributs @auth.uri et @uri.

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <langUsage>
         <language xml:id="..." auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="fra" uri="ISO 639">French</language>
     </langUsage>         
   </work>
</workList>
```

##### Langue originale de la pièce
<a id="TXO_ref2"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 [3.6.6 Language Usage](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkLanguage)|Indique la langue originale de l'oeuvre encodée. |TXO|



Balise : `<langUsage>/<language>`

Autre option : -

Recommandations : <langUsage> contient l'ensemble des langues devant être décrites dans le fichier MEI. Dans le cas d'une seule langue renseignée, ici la langue originale, il n'apparait pas nécessaire de s'encombrer d'un attribut le précisant (comme dans l'exemple ci-dessous). Pour la distinction de plusieurs langues dans le cas de traductions ou d'adaptations, voir ci-dessous. 

Il est cependant conseillé, pour des questions d'interopérabilité, d'ajouter l'identifiant ISO de la langue renseignée à l'aide des attributs @auth.uri et @uri.

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <langUsage>
         <language xml:id="..." auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="fra" uri="ISO 639">French</language>
     </langUsage>         
   </work>
</workList>
```

##### Langue de la pièce encodée (si différente de la langue originale)
<a id="TXL_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.6 Language Usage](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkLanguage)|Indique la langue de l'oeuvre encodée, si différente de la langue originale (traduction, adaptation, etc). |TXL|



Balise : `<langUsage>/<language>`

Autre option : -

Recommandations : En cas de langue traduite utilisée au sein du fichier, il semble que la seule possibilité en MEI (en raison de l'absence du <ProfilDesc> de la TEI) est de préciser la nature des langues à l'aide d'un @type (type="original", type="translation"). C'est à ce niveau que la balise <langUsage> trouve véritablement son sens en permettant de lister plusieurs langues. 

En plus de l'identifiant ISO, il est conseillé de préciser un @xml:id propre à chaque langue afin de pouvoir renseigner ce même identifiant dans la partie <music>, dans <verse> ou <syl> à l'aide de @xml:lang - précisant ainsi la langue utilisée pour chaque entité textuelle présente dans l'édition numérique.  

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <langUsage>
         <language xml:id="Lat" auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="lat" uri="ISO 639-3" type="original">Latin</language>
         <language xml:id="Fr" auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="fra" uri="ISO 639-3" type="translation">French</language>
     </langUsage>          
   </work>
</workList>
```
##### Traducteur du texte
<a id="TRN_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Indique, le cas échéant, l'identité de la personne responsable de la traduction de l'oeuvre. |TRN|

 

Balise (dans le cas d'un traducteur historique, propre à l'oeuvre encodée) : `<contributor>`/`<persName>`

Autre option (dans le cas d'un traducteur ad hoc, pour l'édition numérique ou l'édition moderne utilisée comme source) : `<respStmt>`/`<persName>`

Recommandations : Renseigner la personne responsable de la traduction d'une oeuvre dépend avant tout du statut de cette dernière. S'il s'agit d'un traducteur historique (dans le cas où la traduction est une manifestation de l'oeuvre), celui-ci est renseigné comme un <contributor> au sein de <workList>. Sa fonction précise est indiquée à l'aide de @role="translator" - le terme "translator" fait partie des Marc Relators ainsi que du vocabulaire des fonctions de Doremus. L'identifiant du traducteur (@xml:id) doit être ajouté dans la définition de la langue <language>.

Exemple :
```
<workList xml:id="...">
   <work xml:id="...">
      <contributor>
         <persName xml:id="T1" role="translator" auth="..." auth.uri="..." codedval="...">XXX</persName>
      </contributor>   
      <langUsage>
         <language xml:id="Lat" type="original">Latin</language>
         <language xml:id="Fr" resp="T1" type="translation">French</language>
     </langUsage>          
   </work>
</workList>
```
Recommandations : Si, à l'inverse, il s'agit d'un traducteur ad hoc dont la traduction n'a qu'une valeur éditoriale, il est préférable de renseigner son identité dans <fileDesc>, avec l'ensemble des personnes disposant d'une responsabilité éditoriale. Le fonctionnement reste cependant le même que précédemment, dans la mesure où l'identifiant du traducteur doit à nouveau être indiqué dans la définition de la langue concernée (dans <workList>), via @resp. 

Il est à noter que bien localiser la place du traducteur et de renseigner son identifiant dans <language> pallie l'absence de différence explicite en MEI entre un texte traduit constitutif de l'oeuvre (traduction historique) et un texte traduit pour les besoins de l'édition (traduction éditoriale). 

Exemple :
```
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
       <respStmt xml:id="...">
          <persName xml:id="VV" role="translator" auth="..." auth.uri="http://..." codedval="...">...</persName>
       </respStmt>
   </titleStmt>
</fileDesc>

-------# plus bas

<workList xml:id="...">
   <work xml:id="...">
      <langUsage>
         <language xml:id="..." type="original">...</language>
         <language xml:id="Fr" resp="VV" type="translation">...</language>
     </langUsage>          
   </work>
</workList>
```
#### c. Informations liées à l'œuvre
##### Numéro d'opus
<a id="OPS_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Numéro d'opus de l'oeuvre d'appartenance de l'oeuvre encodée.|OPS|



Balise : `<title type="uniform">`/`<title type="subordinate" label="opus">`

Autre option : `<identifier label="opus">`

Recommandations : Nous envisageons le numéro d'opus comme un syntagme du titre de l'oeuvre d'appartenance. Ainsi, nous recommandons de l'encoder à l'aide d'une balise <title> et du @type="subordinate", tout en précisant le @label pour plus de clarté. Toutefois, les guidelines MEI semblent privilégier <identifier>, utilisé comme élément enfant de <title>. Nous proposons cette possibilité comme une option alternative, bien que celle-ci apparaisse structurellement discutable, notamment au regard du sens particulièrement vague de l'élément <identifier> ("Examples include an International Standard Book/Music Number, Library of Congress Control Number, publisher’s number, a personal identification number, an entry in a bibliography or catalog, etc."). Nous conseillons a minima de bien préciser chaque fois @label="opus". 

Exemple :
```
<workList>
   <work>
      <title type="main">Prélude en do majeur</title>
      <titlePart>
         <title type="uniform">Vingt-quatre Préludes pour piano</title>
         <title type="subordinate" label="opus">28</title>
      <titlePart>
   </work>
</worklist> 
```

##### Effectif
<a id="AIN_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Effectif|AIN|



Balise : 

<perfMedium>
   <perfResList>
      <perfRes>...</PerfRes>
   </perfResList>
</perfMedium>

Recommandations : 
Pour être précis dans le nombre de musicien, on utilise l'attribut @count dans l'élément perfRes.

Exemple :
```
<perfMedium>
<perfResList>
<perfRes count="2">Violons</perfRes>
<perfRes count="1">Alto</perfRes>
<perfRes count="1">Violoncelle</perfRes>
</perfResList>
</perfMedium>
```

### Dans la partie <music> (il faut dire que ce genre d'usage n'est pas recommandé) 

##### Numéro d'acte (<music?>)
<a id="OAC_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Numéro d'acte|OAC|



Balise : 

Autre option : <body>
   <mdiv label="act" n="1">
      <mdiv label="scene" n="1">
         <score></score>
      </mdiv>
      <mdiv label="scene" n="2">
         <score></score>
      </mdiv>
   </mdiv>
   <mdiv label="act" n="2">
      <mdiv label="scene" n="1">
         <score></score>
      </mdiv>
      <mdiv label="scene" n="2">
         <score></score>
      </mdiv>
   </mdiv>
</body>

Recommandations : S'il est bien question d'une précision au sein de <music> : "The score and parts elements are placed here and not directly within the body element because score and part characteristics may change from mdiv to mdiv. For example, the 2nd movement of a symphony may require different performing forces (and therefore different score and part layout) than the other movements. The mdiv element may be recursively nested in order to represent music which exhibits this kind of structure. For example, an opera is normally divided into acts, which are in turn divided into scenes." https://music-encoding.org/guidelines/v5/elements/mdiv.html

Exemple :
```

```

##### Numéro de scène (<music?>)
<a id="OSC_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Numéro de scène|OSC|



Balise : 

Autre option : <body>
   <mdiv label="act" n="1">
      <mdiv label="scene" n="1">
         <score></score>
      </mdiv>
      <mdiv label="scene" n="2">
         <score></score>
      </mdiv>
   </mdiv>
   <mdiv label="act" n="2">
      <mdiv label="scene" n="1">
         <score></score>
      </mdiv>
      <mdiv label="scene" n="2">
         <score></score>
      </mdiv>
   </mdiv>
</body>

Recommandations : 

Exemple :
```

```

##### Numéro de mouvement (<music?>)
<a id="OMV_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)| Numéro de mouvement|OMV|



Balise : 

Autre option : <body>
   <mdiv label="Allegro" n="1">
      <score></score>
   </mdiv>
   <mdiv label="Menuet" n="2">
      <score></score>
   </mdiv>
</body>

Recommandations : Même commentaire que ci-dessous. Pour le numéro, nous pourrions ajouter dans les différents éléments @n.

Exemple :
```

```

##### Désignation du mouvement ou nom du mouvement
<a id="OMD_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Désignation du mouvement ou nom du mouvement|OMD|



Balise : 

Autre option : <body>
   <mdiv label="Allegro">
      <score></score>
   </mdiv>
   <mdiv label="Menuet">
      <score></score>
   </mdiv>
</body> 

Recommandations : S'il s'agit d'un seul mouvement encodé au sein du fichier MEI, alors il me semble que le renseignement est similaire à celui renseigné pour "titre de l'oeuvre d'appartenance". Sil s'agit de plusieurs mouvements encodés au sein d'un même fichier MEI (peu recommandé), dans ce cas il faudrait indiquer cette information dans <music> à l'aide de <mdiv>. 

Exemple :
```

```

##### Commanditaire
<a id="OCO_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Commanditaire|OCO|



Balise : 

bibliStruc/imprint/respStmt/persName
<biblStruc>
   <imprint>
      <resStmt>
         <persName role="sponsor">...</persName>
      </respStmt>
   </imprint>
</biblStruc>

Autre option : 

Recommandations :

 L'identité de la personne ayant commandé la création ou la publication d’une œuvre peut être indiqué dans un élément persName avec un attribut @role adéquat. Pour remplir l'attribut @role, nous proposons de nous appuyer sur le vocabulaire Doremus des fonctions et donc de choisir "sponsor"  (https://github.com/DOREMUS-ANR/knowledge-base/blob/master/vocabularies/function.ttl).

Exemple :
```
<biblStruc>
   <imprint>
      <resStmt>
         <persName role="sponsor" auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="47837095">Franz von Walsegg</persName>
      </respStmt>
   </imprint>
</biblStruc>

```

##### Collecteur de la musique
<a id="OCL_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Collecteur de la musique|OCL|



Balise : 

<biblStruc>
   <imprint>
      <resStmt>
         <persName role="collector_of_field_material">...</persName>
      </respStmt>
   </imprint>
</biblStruc>

Autre option : 

Recommandations :

 Dans le cas d'une musique de tradition orale, le collecteur de la musique peut être indiqué en ajoutant un attribut @role à l'élément persName déclinant son identité. Nous proposons de nous appuyer sur le vocabulaire Doremus des fonctions et donc de choisir "collector_of_field_material"  (https://github.com/DOREMUS-ANR/knowledge-base/blob/master/vocabularies/function.ttl).

Exemple :
```
<biblStruc>
   <imprint>
      <resStmt>
         <persName role="collector_of_field_material" auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="179852912">Manuel García Matos</persName>
      </respStmt>
   </imprint>
</biblStruc>

```
##### Dédicace
<a id="ODE_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Dédicace|ODE|



Balise : <workList>
   <work>
      <creation>
         <dedicatee>
            <persName>...</persName>
         </dedicatee>
      </creation>
   </work>
<workList>  

Autre option : Ou si nous souhaitons ajouter plus d'informations sur la dédicace elle-même et son contexte:

<workList>
   <work>
      <creation>
         <dedication>
            <quote>...</quote>
            <eventList>...</eventList>
            <dedicatee>
               <persName>...</persName>
            </dedicatee>
         </dedication>
      </creation>
   </work>
<workList>   

Recommandations : 

Exemple :
```
<workList>
   <work>
      <creation>
         <dedicatee>
            <persName>...</persName>
         </dedicatee>
      </creation>
   </work>
<workList>  
```
##### Date de composition
<a id="ODT_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5 Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory)|Date de composition de l'oeuvre encodée.|ODT|



Balise : <creation>/<date>

Autre option : 

Recommandations : La date de composition peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise <date> est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".

Exemple :
```
<workList>
   <work>
      <creation>
         <date notbefore="1530-01-01" notafter="1550-01-01" cert="low">1540</date>
      </creation>
   </work>
</workList>
```

##### Pays de composition de l'oeuvre encodée
<a id="OCY_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 | [3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Pays dans lequel l'oeuvre encodée à été composée. |OCY|



Définition :


Balise : <creation>
         <date notbefore="1530" notafter="1550" cert="low">1540</date>
         <country>France</country>
      </creation>


Autre option : 

Recommandations : 

Exemple :
```
<workList>
   <work>
      <creation>
         <date notbefore="1530" notafter="1550" cert="low">1540</date>
         <country>France</country>
      </creation>
   </work>
</workList>
```

##### Ville de composition
<a id="OPC_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Ville de composition|OPC|



Balise : <workList>
   <work>
      <creation>
         <date notbefore="1530" notafter="1550" cert="low">1540</date>
         <country>France</country>
         <settlement>Paris</settlement>
      </creation>
   </work>
</workList>
Exemple :
```
<workList>
   <work>
      <creation>
         <date notbefore="1530" notafter="1550" cert="low">1540</date>
         <country>France</country>
         <settlement>Paris</settlement>
      </creation>
   </work>
</workList>
```

#### d. Éléments esthétiques

##### Désignation du genre musical
<a id="AGN_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.12 Classification](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkClass)|Désignation du genre musical|AGN|



Balise : 
<classification xml :id="…">
   <termList xml:id="…">
      <term>
         <genre></genre>
      </term>
   </termList>
</classification>

Exemple :
```
<classification xml :id="…">
   <termList xml:id="…">
      <term label="music genre" xml:id="…">...</term>
   </termList>
</classification>
```

##### Désignation du style/période/typologie de l'œuvre
<a id="AST_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.12 Classification](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkClass)|Désignation du style/période/typologie de l'œuvre|AST|



Balise : 

<classification xml :id="…">
   <termList xml:id="…">
      <term>
         <periodName>...</periodName>
         <styleName>...</styleName>
      </term>
   </termList>
</classification>  

Exemple :
```
<workList>
   <work>
      <creation xml:id="…">
         <periodName>Contemporary music</periodName>
         <styleName>Minimalist</styleName>
      </creation>
   </work>
</workList>   
```

##### Classification du mode (Moyen âge et Renaissance)
<a id="AMD_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.3. Key, Tempo, and Meter](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkKeyTempoMeter)|Classification du mode (Moyen âge et Renaissance)|AMD|



Balise : 

<workList>
   <work>
      <key mode="dorian">
      <creation xml:id="…">
         <periodName>Contemporary music</periodName>
         <styleName>Minimalist</styleName>
      </creation>
   </work>
</workList>  

Autre option : 

Recommandations : En MEI, le mode se désigne dans <key>, donc dans <work> ou <expression>, avec @mode. L'information peut également se retrouver dans la définition des portées. Il y a trois vocabulaires contrôlés MEI pour les modes. Voir data.mode.

Exemple :
```
<workList>
   <work>
      <key mode="dorian">
      <creation xml:id="…">
         <periodName>Contemporary music</periodName>
         <styleName>Minimalist</styleName>
      </creation>
   </work>
</workList>  
```

##### Classification métrique
<a id="AMT_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.3. Key, Tempo, and Meter](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkKeyTempoMeter)|Classification métrique|AMT|



Balise : 

<meter>

Autre option : 

Recommandations : 

Exemple :
```

```

##### Note de format libre / Nota bene
<a id="ONB_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.5 Notes Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerNotesStatement)|Note de format libre / Nota bene|ONB|



Balise : 
<notesStmt>
   <annot>...</annot>
   <annot>...</annot>
</notesStmt>

Autre option : 

Recommandations : Selon les besoins, un élément notesStmt peut se trouver dans les éléments « expression », « fileDesc », « item », « manifestation » ou « work ».

Exemple :
```
<notesStmt>
   <annot>This is the encoding of the 1st movement of K. 157 according to the Neue Mozart-Ausgabe VIII/20/1/1.</annot>
</notesStmt>

```

#### e. Interprétation de l'œuvre
##### Nom du groupe des interprètes
<a id="MGN_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium)|Nom du groupe des interprètes|MGN|



Balise : 

<perfMedium>
      <corpName auth="..." auth.uri="http://..." codedval="..." role="...">Nom du groupe des interprètes</corpName>
</perfMedium>


Autre option : 

Recommandations : Je ne crois pas que cela soit nécessaire dans un header d'une édition critique.

Exemple :
```
<workList>
   <work>
      <perfMedium>
            <corpName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="157575652" role="quatuor">Quatuor Voce</corpName>
      </perfMedium>
   </work>
</workList>
```


##### Nom de l'interprète
<a id="MPN_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium)|Nom de l'interprète|MPN|



Balise : 
<perfMedium>
   <perfRes>
      <persName auth="" auth.uri="" codedval="" >Nom de l'interprète</persName>
      </perfRes>
</perfMedium>

Recommandations : 

Exemple :
```
<perfMedium>
   <perfRes>
      <persName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="302774677" role="violist">Guillaume Becker</persName>
      </perfRes>
</perfMedium>
```


##### Interprète soupçonné (?)
<a id="MPS_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium)|Interprète soupçonné (?)|MPS|



Balise : Balise : 
<perfMedium>
   <perfRes>
      <persName auth="" auth.uri="http://..." codedval="" role="..." cert="high, medium, low ou unknown">Nom de l'interprète</persName>
      </perfRes>
</perfMedium>

Recommandations : Le niveau de certitude accordé à l'interprète peut être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".

Exemple :
```
<perfMedium>
   <perfRes>
      <persName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="302774677" role="violist" cert="high">Guillaume Becker</persName>
      </perfRes>
</perfMedium>
```


##### Date d'exécution/représentation
<a id="MRD_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5. Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory)|Date d'exécution/représentation|MRD|



Balise : 
<workList>
   <work>
      <title>...</title>
      <history>
         <eventList>
            <event type="performance">
               <date isodate="aaaa-mm-jj">AAAA-MM-JJ</date>
            </event>
         </eventList>
      </history>
   </work>
</workList>

Autre option : Dans le cas d'une œuvre dont il existe différentes expressions, dans le sens du modèle FRBR, il est possible de renseigner les informations concernants les exécutions/représentations de chaque expression distinctement.
<workList>
   <work>
      <expressionList>
         <expression>
            <title>...</tite>
            <history>
               <eventList>
                  <event type="performance">
                      <date isodate="aaaa-mm-jj">AAAA-MM-JJ</date>
                  </event>
               </eventList>
            </history>
         </expression>
      </expressionList>
   </work>
</workList>

Recommandations : Selon la typologie du projet, on va indiquer les informations concernant la représentation dans WorkList ou dans expressionList.
La date de composition peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise <date> est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".

Exemple :
```
<workList>
   <work>
      <history>   
         <eventList>
            <event type="premiere">
               <date isodate="1811-11-28">1811-11-28</date>
               <geogName>Leipzig</geogName>
               <perfName>Direction : Johann Ohilipp Christian Schulz</perfName>
            </event>
         <event type="performance">
            <date isodate="1812-02-12">1812-02-12</date>
            <placeName>Vienne</placeName>
            <perfRes>pianist : Carl Czerny</perfName>
         </event>
         </eventList>
      </history>
  </work>
</workList>
```


##### Lieu d'exécution/représentation
<a id="MLC_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5. Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory)|Lieu d'exécution/représentation|MLC|



Balise : 

<workList>
   <work>
      <title>...</tite>
      <history>
         <eventList>
            <event type="performance">
               <geogName>Vienne</geogName>
            </event>
         </eventList>
      </history>
   </work>
</workList>

Autre option : Si nous possédons l'adresse exacte du lieu d'exécution/représentation, nous pouvons utiliser, à la place de l'élément geogName, l'élément adress.

<workList>
   <work>
      <title>...</tite>
      <history>
         <eventList>
            <event type="performance">
               <address>
                  <country>Pays</country>
                  <settlement type="city">Ville</settlement>
                  <postCode>Code Postal</postCode>
                  <district type="arrondissement">Numéro de l'arrondissement</district>
                  <street> <num>Numéro</num>, nom de la rue</street>
               </address>
            </event>
         </eventList>
      </history>
   </work>
</workList>


Recommandations : 

Exemple :
```
<workList>
   <work>
      <title>...</tite>
      <history>
         <eventList>
            <event type="performance">
               <address>
                  <country>Autriche</country>
                  <settlement type="city">Vienne</settlement>
                  <postCode>1010</postCode>
                  <district type="arrondissement">Ier</district>
                  <street> <num>1</num>, Musikvereinsplatz</street>
               </address>
            </event>
         </eventList>
      </history>
   </work>
</workList>
```


##### Nom du responsable de l'exécution/représentation (chef d'orchestre)
<a id="MCN_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium)|Nom du responsable de l'exécution/représentation (chef d'orchestre)|MCN|



Balise :   
<eventList>
   <event type="premiere">
         <perfMedium>
            <perfRes>
               <persName auth.uri="http://..." role="director">Nom du chef d'orchestre</persName>
            </perfRes>
            <perfRes>
               <corpName auth.uri="http://..." role="orchestra">Nom de l'orchestre</corpName>
            </perfRes>
         </PerfMedium>           
   </event>
</eventList>

Recommandations : 

Exemple :
```
 <history>   
   <eventList>
      <event type="premiere">
         < isodate="1811-11-28">1811-11-28</date>
         <geogName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="155929994">Leipzig</geogName>
            <perfMedium>
               <perfRes>
                  <persName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="7654612" role="pianist">Friedrich Schneider</persName>
               </perfRes>
               <perfRes>
                  <persName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="62321200" role="director">Johann Philipp Christian Schulz</persName>
               </perfRes>
               <perfRes>
                  <corpName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="131864116" role="orchestra">Orchestre du Gewandhaus de Leipzig</corpName>
               </perfRes>
            </perfMedium>           
      </event>
</history>
```


##### Date de la première exécution/représentation
<a id="MPD_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5. Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory)|Date de la première exécution/représentation|MPD|



Balise : 
<workList>
   <work>
      <title>...</title>
      <history>
         <eventList>
            <event type="premiere">
               <date isodate="aaaa-mm-jj">AAAA-MM-JJ</date>
            </event>
         </eventList>
      </history>
   </work>
</workList>

Autre option : 

Recommandations : La date de la première exécution d'une oeuvre est à situé, a minima, au niveau de workList, dans une balise <event> dont l'attribut @type prend pour valeur « premiere ». 
La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise <date> est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".

Exemple :
```
<workList>
  <work>
    <title>Pelléas et Mélisande</title>
    <eventList>
      <event type="premiere">
        <date isodate="1902-04-30">1902-04-30</date>
        <placeName>Opéra-Comique, Paris</placeName>
        <perfName>Direction : André Messager</perfName>
      </event>
    </eventList>
  </work>
</workList>
```

#### Œuvre associée (ex. Stéphane Mallarmé, L’Après-midi d’un faune)
<a id="GAW_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.5.1 FRBR Entities in MEI](https://music-encoding.org/guidelines/v5/content/metadata.html#FRBRentities)|Œuvre associée (ex. Stéphane Mallarmé, L’Après-midi d’un faune)|GAW|



Balise : 

<work>
   <expressionList>
      <expression>
         <title>...</title>
         ...
      </expression>
   </expressionList>
</work>

Recommandations : 
Les œuvres associées sont, au sens du modèle FRBR, des expressions différentes d'une œuvre. S'il est besoin de renseigner les informations concernant les autres expressions d'une œuvre, ces renseignements se situeront dans un élément expression dédié à chaque œuvre associée.

Exemple :
```
<work>
   <expressionList>
      <expression>
         <title auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="385145858128823022341">L'Après-midi d'un faune</title>
         <persName role="author" auth="VIAF" auth.uri="http://viaf.org/viaf/51692711">Stéphane Mallarmé</persName>
      </expression>
      <expression>
         <title auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="307491596">Prélude à l'Après-midi d'un faune</title>
         <composer>
            <persName role="author" auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="6219636">Claude Debussy</persName>
         </composer>
      </expression>
   </expressionList>
</work>
```


#### Désignation de la collection
<a id="ACO_ref1"></a>
<a id="GCO_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.4 Series Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerSeriesStatement)|Désignation de la collection|ACO & GCO|



Balise : 

Autre option : 

Recommandations : La collection concerne les manifestations dans le modèles FRBR. C'est une manifestation précise qui fait partie d'une "collection". Cela peut aussi être l'item ou la source.

<sourceDesc>
<source>
<series>


Exemple :
```

```

#### Titre de la collection
<a id="GTL_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.4 Series Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerSeriesStatement)|Titre de la collection|GTL|



Balise : 
<sourceDesc>
<source>
<series>
<title>

Exemple :
```

```
### Description de la source <SourceDesc>
#### a. Titre
##### Titre de la source utilisée pour l'édition digitale
<a id="OTL_ref4"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |Titre de la source.|[3.4.1.6 Source Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerSourceDescription)|OTL|




Balise :`<title>`

Autre option : -

Recommandations : Cette manière minimale de renseigner le titre convient surtout aux titres officiels et consensuels des oeuvres - des titres qui ne font pas l'objet d'ambiguité. Pour le renseignement de titres alternatifs ou populaires, voir plus bas.

Exemple :
```
"<sourceDesc xml:id=""..."">
   <source xml:id=""..."">
      <bibl xml:id=""..."">
         <title xml:id=""..."">...</title>
      </bibl>
   </source>   
</sourceDesc>"
```
##### Titre de publication
<a id="PTL_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Titre de publication|PTL|



Balise : 
<sourceDesc>
   <source>
      <bibl>
         <title type="main"> Il nono libro de madrigali</title>
         <title type="subordinate">a cinque voci (1599)</title>  
      </bibl>
   </source>
Exemple :
```
<sourceDesc>
   <source>
      <bibl>
         <title type="main"> Il nono libro de madrigali</title>
         <title type="subordinate">a cinque voci (1599)</title>  
      </bibl>
   </source>
```

##### Titre du manuscrit
<a id="SMS_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Titre du manuscrit|SMS|



```
Balise : <source recordtype="d">
  <bibl>
     <physLoc>
       <repository>
          <corpName>Bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <bibl>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
       </bibl>
     </relatedItem>
  </bibl>
</source>
```

Autre option : 

```

<manifestation recordtype="d">
   <identifier>
      <title>Le Roman de Fauvel</title>
   </identifier>
   <langUsage>
      <language n="1">Français</language>
      <language n="2">Latin</language>
   </langUsage>   
   <itemList>
      <item recordtype="d">
         <physLoc>
            <repository>
               <corpName>Bibliothèque nationale de France</corpName>
               <abbr>BnF</abbr>
            </repository>
         </physLoc>
         <identifier>
            <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
            <abbr>Fr. 146</abbr>
            <title type="alternative">Roman de Fauvel</title>
            <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
         </identifier>  
         <availability>
            <accessRestrict>Non consultable en bibliothèque</accessRestrict>
         </availability> 
      </item>
   </itemList>
```

#### b. Compositeur
##### Compositeur de la source utilisée pour l'édition digitale
<a id="COM_ref3"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription)|Indique le nom du compositeur de l'œuvre.|COM|



Balise : `<composer>`

Autre option : `<persName role="creator">`

Recommandations : Le ou les compositeurs renseignés ici ne concernent que l'oeuvre encodée dans le fichier MEI et non une oeuvre tierce. À noter également que la valeur de rôle est libre. Toutefois, il est conseillé de suivre un thesaurus ou un vocabulaire contrôlé dans un souci de standardisation tels que [VIAF](https://www.oclc.org/fr/viaf.html) Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées (ici aussi, préciser). 

Exemple :

```
"<sourceDesc xml:id=""..."">
   <source xml:id=""..."">
      <bibl xml:id=""..."">
         <composer xml:id=""..."">
            <persName role=""creator"" auth="..." auth.uri=""http://..."" codedval="...">...</persName>
         </composer>
      </bibl>
   </source>
</sourceDesc>"
```
#### c. Informations liées à l'édition 
##### Éditeur de la source utilisée pour l'édition digitale
<a id="PED_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Éditeur de la source utilisée pour l'édition digitale|PED|



Balise : Si c'est une personne :

```
<sourceDesc>
   <source>
      <bibl>
         <editor>
           <persName auth="VIAF" auth.uri="https://viaf.org/viaf/" codedval="12395760">Paolo Fabri</persName>
         </editor>
      </bibl>
   </source>
```

Autre option : Si c'est une maison d'édition (cumulable) :

```
<sourceDesc>
     <source>
         <bibl>
            <imprint>
               <corpName>Edizioni Suvini Zerboni</corpName>
               <date isodate="2000">2000</date>
               <settlement auth="GeoNames" auth.uri="https://www.geonames.org/" codedval="3173435">Milano</settlement>
            </imprint>
         </bibl>
     </source>
```

Recommandations : 

Exemple :
```
Si c'est une personne :
<sourceDesc>
   <source>
      <bibl>
         <editor>
           <persName auth="VIAF" auth.uri="https://viaf.org/viaf/" codedval="12395760">Paolo Fabri</persName>
         </editor>
      </bibl>
   </source>
```

##### Premier éditeur
<a id="PPR_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Premier éditeur|PPR|



Balise : <sourceDesc>
   <source>
      <bibl>
         <editor xml:id="E1" n="1" precedes="#E2">
            <persName></persName>
         </editor>
         <editor xml:id="E2" n="2" follows="#E1">>
            <persName></persName>
         </editor>     
      </bibl>
   </source>

Autre option : Même logique s'il s'agit de la maison d'édition en utilisant <imprint>. Des dates peuvent également être ajoutées pour <editor> pour plus de précisions.

Recommandations : 

Exemple :
```
<sourceDesc>
   <source>
      <bibl>
         <editor xml:id="E1" n="1" precedes="#E2">
            <persName></persName>
         </editor>
         <editor xml:id="E2" n="2" follows="#E1">>
            <persName></persName>
         </editor>     
      </bibl>
   </source>
```

##### Date de la première publication
<a id="PDT_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Date de la première publication|PDT|



Balise : 
<sourceDesc>
   <source>
      <bibl>
         <edition xml:id="E1" n="1" precedes="#E2">
            <editor  n="1">
               <persName></persName>
            </editor>
            <date isodate="1940">1940</date>
         </edition>
         <edition xml:id="E2" n="2" follows="#E1">   
            <editor n="2">
               <persName></persName>
            </editor> 
            <date isodate="1999">1999</date> 
         </edition>     
      </bibl>
   </source>

Autre option : 

Recommandations : La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise <date> est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".

Exemple :
```
<sourceDesc>
   <source>
      <bibl>
         <edition xml:id="E1" n="1" precedes="#E2">
            <editor  n="1">
               <persName></persName>
            </editor>
            <date isodate="1940">1940</date>
         </edition>
         <edition xml:id="E2" n="2" follows="#E1">   
            <editor n="2">
               <persName></persName>
            </editor> 
            <date isodate="1999">1999</date> 
         </edition>     
      </bibl>
   </source>
```

##### Lieu de publication
<a id="PPP_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Lieu de publication|PPP|



Balise : <sourceDesc>
   <source recordtype="c">
      <bibl>
         <composer>
           <persName auth="VIAF" auth.uri="https://viaf.org/viaf/" codedval="2656905/">Luca Marenzio</persName>
         </composer>
         <title type="main"> Il nono libro de madrigali</title>
         <title type="subordinate">a cinque voci (1599)</title>
         <imprint>
            <corpName>Edizioni Suvini Zerboni</corpName>
            <date isodate="2000">2000</date>
            <settlement auth="GeoNames" auth.uri="https://www.geonames.org/" codedval="3173435">Milano</settlement>
         </imprint>
      </bibl>
   </source>
Exemple :
```
<sourceDesc>
   <source recordtype="c">
      <bibl>
         <composer>
           <persName auth="VIAF" auth.uri="https://viaf.org/viaf/" codedval="2656905">Luca Marenzio</persName>
         </composer>
         <title type="main"> Il nono libro de madrigali</title>
         <title type="subordinate">a cinque voci (1599)</title>
         <imprint>
            <corpName>Edizioni Suvini Zerboni</corpName>
            <date isodate="2000">2000</date>
            <settlement auth="GeoNames" auth.uri="https://www.geonames.org/" codedval="3173435">Milano</settlement>
         </imprint>
      </bibl>
   </source>
```

##### Numéro de catalogue de l'éditeur (ex. cotage)
<a id="PC#_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Numéro de catalogue de l'éditeur (ex. cotage)|PC#|



Balise : 

Autre option : 

Recommandations : 

Exemple :
```

```

##### Numéro de catalogue scientifique [ex. BWV 551 ou Koechel 117]
<a id="SCT_ref1"></a>
<a id="SCA_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Numéro de catalogue scientifique (abr.) [ex. BWV 551]|SCT & SCA|



Balise : 
<work>
   <identifier auth.uri="http://...">
      ...
   </identifier>
</work>


Autre option : 

Recommandations : 
Dans des projets comme "Bach Digital" ou "MoVi - The digital Mozart score Viewer", les numéro de catalogue sont indiqué dans une balise identifier avant un attribut label ou auth. Afin de pouvoir identifier automùatiquement que la balise identifier contient un numéro de catalogue scientifique, il faut un attribut @type dont la valeur indique catalogue scientifique.

Exemple :
```
<work>
   <identifier auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="188308384">
      157
   </identifier>
</work>
```

##### Numéro
<a id="ONM_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Numéro|ONM|



Balise : 

Autre option : 

Recommandations : 

Exemple :
```
```
##### Volume
<a id="OVM_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Volume|OVM|



Balise : <source>
  <bibl>
      <composer>
          <persName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="...">XXX</persName>
      </composer>
      <title type="main">XXX</title>
      <editor>
          <persName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="..."></persName>
      </editor>
      <biblScope label="volume">1</biblScope>
   </bibl>
</source>

Autre option : 

Recommandations : J'imagine que cela concerne essentiellement des données bibliographiques. J'emprunte cette manière à la TEI. La même est possible pour le numéro. 

Exemple :
```
<source>
  <bibl>
      <composer>
          <persName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="...">XXX</persName>
      </composer>
      <title type="main">XXX</title>
      <editor>
          <persName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="..."></persName>
      </editor>
      <biblScope label="volume">1</biblScope>
   </bibl>
</source>
```
##### Publication
<a id="PUB_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|État de publication (ex. publié, pas encore publié, en cours de publication)|PUB|



Balise : <sourceDesc>
   <source>
      <bibl>
         <unpub>En raison d'un manque de financement</unpub>
      </bibl>
   </source>

Autre option : 

Recommandations : En MEI, l'approche est à l'évidence très binaire : publié ou non. Nul besoin de le préciser si l'entité est bel et bien publiée (assez logique), mais par contre <unpub> est assez limité. Seul du texte est possible, expliquant les raisons de la non-publication. <unpub> peut d'ailleurs aussi aller dans <imprint> pour plus de précision sur le contexte de la non-publication (si celle-ci dépend de la maison d'édition).

Exemple :
```
<sourceDesc>
   <source>
      <bibl>
         <unpub>En raison d'un manque de financement</unpub>
      </bibl>
   </source>
```

Recommandations : 

Exemple :
```
<source recordtype="d">
  <bibl>
     <physLoc>
       <repository>
          <corpName>Bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <bibl>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
       </bibl>
     </relatedItem>
  </bibl>
</source>
```

##### Lieu de conservation du manuscrit
<a id="SML_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Lieu de conservation du manuscrit|SML|



Balise : <source recordtype="d">
  <bibl>
     <physLoc>
       <repository>
          <corpName>Bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <bibl>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
       </bibl>
     </relatedItem>
  </bibl>
</source>

Autre option : <manifestation recordtype="d">
   <identifier>
      <title>Le Roman de Fauvel</title>
   </identifier>
   <langUsage>
      <language n="1">Français</language>
      <language n="2">Latin</language>
   </langUsage>   
   <itemList>
      <item recordtype="d">
         <physLoc>
            <repository>
               <corpName>Bibliothèque nationale de France</corpName>
               <abbr>BnF</abbr>
            </repository>
         </physLoc>
         <identifier>
            <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/cc45158c">Français 146</identifier>
            <abbr>Fr. 146</abbr>
            <title type="alternative">Roman de Fauvel</title>
            <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
         </identifier>  
         <availability>
            <accessRestrict>Non consultable en bibliothèque</accessRestrict>
         </availability> 
      </item>
   </itemList>

Recommandations : 

Exemple :
```
<source recordtype="d">
  <bibl>
     <physLoc>
       <repository>
          <corpName>Bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <bibl>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
       </bibl>
     </relatedItem>
  </bibl>
</source>
```

##### Info sur l'accès au manuscrit
<a id="SMA_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Info sur l'accès au manuscrit|SMA|



Balise : <source recordtype="d">
  <bibl>
     <physLoc>
       <repository>
          <corpName>Bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <bibl>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
          <ref target="https://gallica.bnf.fr/ark:/12148/btv1b8454675g"/>
          <availability>
             <accessRestrict>Non consultable en bibliothèque</accessRestrict>
          </availability>
       </bibl>
     </relatedItem>     
  </bibl>
</source>

Autre option : <manifestation recordtype="d">
   <identifier>
      <title>Le Roman de Fauvel</title>
   </identifier>
   <langUsage>
      <language n="1">Français</language>
      <language n="2">Latin</language>
   </langUsage>   
   <itemList>
      <item recordtype="d">
         <physLoc>
            <repository>
               <corpName>Bibliothèque nationale de France</corpName>
               <abbr>BnF</abbr>
            </repository>
         </physLoc>
         <identifier>
            <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
            <abbr>Fr. 146</abbr>
            <title type="alternative">Roman de Fauvel</title>
            <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
         </identifier>  
         <availability>
            <accessRestrict>Non consultable en bibliothèque</accessRestrict>
         </availability> 
      </item>
   </itemList>

Recommandations : 

Exemple :
```
<source recordtype="d">
  <bibl>
     <physLoc>
       <repository>
          <corpName>Bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <bibl>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval"cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
          <ref target="https://gallica.bnf.fr/ark:/12148/btv1b8454675g"/>
          <availability>
             <accessRestrict>Non consultable en bibliothèque</accessRestrict>
          </availability>
       </bibl>
     </relatedItem>     
  </bibl>
</source>
```

##### Document d'origine de l'édition électronique
<a id="YOR_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.6 Source Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerSourceDescription)|Document d'origine de l'édition électronique|YOR|



Balise : 
<fileDesc>
    <sourceDesc>
        <source>
          <biblStruct>
           <monogr>
            <imprint>...</imprint>
           </monogr>
          </biblStruct>
        </source>
      </sourceDesc>
</fileDesc>

Autre option : 

 <sourceDesc>
        <source>
          <bibl>
          ... Sans structure
          </bibl>
        </source>
      </sourceDesc>

Recommandations : Nous recommandons d'utiliser une solution plus structuré avec <biblStruct>\<monogr>\<imprint> contenant toutes les informations en lien avec la source.


Exemple :
```

```
##### Propriétaire du document d'origine
<a id="YOO_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Propriétaire du document d'origine|YOO|



Balise : 

!!! Il faut trouver un role adéquat

<sourceDesc>
   <source>
      <biblStruct>
         <monogr>
            <imprint>
               <availability>
                  <useRestrict>
                     <persName role="owner ou qqchose comme ça"></persName>
                  </useRestrict>
               </availability>
            </imprint>
         </monogr>
      </biblStruct>
   </source>
</sourceDesc>

Autre option : 
<sourceDesc>
   <source>
      <bibl>
         <availability>
            <useRestrict>
               <persName role="owner ou qqchose comme ça"></persName>
            </useRestrict>
         </availability>
      </bibl>
   </source>
</sourceDesc>


Recommandations : recommandation d'utiliser bilblStruct qui est plus cadré, mais la question peut se poser. Dans le cas de multiples sources et de différentes natures, bibl est plus libre. À voir.

Exemple :
```

```
##### Année du copyright originaire
<a id="YOY_ref1"></a>


 Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Année du copyright originaire|YOY|


Balise : 
<manifestationList>
   <manifestation>
      <availability>
         <useRestrict>
            <date isodate="...">...</date>
         </useRestrict>
      </availability>
   </manifestation>
</manifestationList>
Exemple :
```
<manifestationList>
   <manifestation>
      <availability>
         <useRestrict>
            <date isodate="1891-01-01">1891</date>
         </useRestrict>
      </availability>
   </manifestation>
</manifestationList>
```

##### Éditeur du document d'origine

<a id="YOE_ref1"></a>


  Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement)|Éditeur du document d'origine|YOE|



Balise : 
<fileDesc>
   <sourceDesc>
      <bibl>
         <imprint>
            <editor>
               <corpName auth="..." auth.uri="http://..." codedval="...">...</corpName>
            </editor>
         </imprint>
      </bibl>
   </sourceDesc>
</fileDesc>
Exemple :
```
<fileDesc>
   <sourceDesc>
      <bibl>
         <imprint>
            <editor>
               <corpName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="268466075">A. Durand & Fils, Éditeurs</corpName>
            </editor>
         </imprint>
      </bibl>
   </sourceDesc>
</fileDesc>
```

### 4. Quelques remarques 

En appui de ces éléments, il nous semble important de ne pas négliger quelques points importants pour favoriser l'interopérabilité des headers MEI. En particulier, le choix de thésaurus de référence est un enjeu important. Il nous semble désormais impensable de choisir un thésaurus n'étant défini selon l'ontologie SKOS, tant cette dernière favorise l'interopérabilité. Recourir aux identifiants du RISM pour les œuvres et leurs sources - ainsi qu'au DIAMM pour les manuscrits, ces derniers étant intégrés au RISM - est une bonne pratique pour l'encodage des œuvres musicales. 

_ThB présentation générale de LRM + un paragraphe sur la réflexion entre BDD sémantique centralisée vs l’information sémantisée dans les headers MEI
il nous est nécessaire de concevoir une batterie de types E55 pour typer les différents niveaux des sources d'après le modèle FRBR_

### 5. Pour conclure

Notre protocole se distingue par une interopérabilité maximale, couplée à une réelle exhaustivité. Bien que sa réalisation puisse être fastidieuse par le nombre important d'éléments à renseigner, le protocole porte une réelle valeur philologique et est ainsi parfaitement adapté à l'édition critique mais aussi au partage de fichiers au sein de la communauté internationale MEI.

En conclusion, il nous semble particulièrement important d'insister sur l'importance de _sourceDesc_ au sein du header MEI. Comme nous avons pu le démontrer à travers un nombre important d'exemples, il est le lieu le plus approprié pour l'expression de la source et les éventuelles opérations ayant permis la _recensio_.

### Index des trigrammes Humdrum

- [ACO](#ACO_ref1)
- [AFR](#AFR_ref1)
- [CBL](#CBL_ref1)
- [CDT](#CDT_ref1)
- [COA](#COA_ref1)
- [COL](#COL_ref1)
- [COM](#COM_ref1),[COM](#COM_ref2),[COM](#COM_ref3)
- [COS](#COS_ref1)
- [EEV](#EEV_ref1)
- [EFL](#EFL_ref1)
- [EMD](#EMD_ref1)
- [ENC](#ENC_ref1)
- [END](#END_ref1)
- [EST](#EST_ref1)
- [GAW](#GAW_ref1)
- [GCO](#GCO_ref1)
- [GTL](#GTL_ref1)
- [LAR](#LAR_ref1)
- [LIB](#LIB_ref1)
- [LOR](#LOR_ref1)
- [ONM](#ONM_ref1)
- [OPR](#OPR_ref1)
- [OPS](#OPS_ref1)
- [OTA](#OTA_ref1)
- [OTL](#OTL-ref1),[OTL](#OTL-ref2),[OTL](#OTL-ref3),[OTL](#OTL-ref4)
- [OTP](#OTP_ref1)
- [OVM](#OVM_ref1)
- [PC#](#PC#_ref1)
- [PDT](#PDT_ref1)
- [PED](#PED_ref1)
- [PPP](#PPP_ref1)
- [PPR](#PPR_ref1)
- [PUB](#PUB_ref1)
- [SCA](#SCA_ref1)
- [SCT](#SCT_ref1)
- [SMA](#SMA_ref1)
- [SML](#SML_ref1)
- [SMS](#SMS_ref1)
- [TRN](#TRN_ref1)
- [TXL](#TXL_ref1)
- [TXO](#TXO_ref1)[TXO](#TXO_ref2)
- [YEC](#YEC_ref1)
- [YEM](#YEM_ref1)
- [YEN](#YEN_ref1)
- [YEP](#YEP_ref1)
- [YER](#YER_ref1)
- [YOE](#YOE-ref1)
- [YOO](#YOO-ref1)
- [YOR](#YOR-ref1)
- [YOY](#YOY_ref1)
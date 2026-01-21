---
redirect_from:
   - /guideline/guideline/guideline.html

title: Description du fichier MEI encodé &lt;fileDesc&gt;
layout: default
nav_order: 5
parent: Guideline

---

# Description du fichier MEI encodé &lt;fileDesc&gt;
## a. Titre

<a id="OTL_ref1"></a>

### Titre de l'édition MEI



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre|≈ OTL|



`<title type=main>`/`<title type="subordinate">`

Autre option : `<title>`

<p style="text-align:justify;">
Recommandations : Le titre est une information souvent ambiguë dans les éditions numériques en raison de la confusion qui règne entre le titre de l'œuvre complète, le titre de la partie encodée ou encore le titre de l'édition. D'ailleurs, le vocabulaire Humdrum ne dispose pas de clé spécifique pour cette dernière valeur (OTL est le titre de l'œuvre, pas de l'édition numérique de cette œuvre). En MEI, dans &lt;fileDesc&gt;, les usages sont nombreux et divergent. Pourtant, il est manifeste que la balise &lt;title&gt; à l'intérieur de &lt;fileDesc&gt; se réfère au titre de l'édition numérique qui peut être distinct du titre de l'œuvre encodée, mais en pratique, ces deux niveaux de titres se superposent souvent. Ainsi, pour distinguer le titre de l'édition et celui de la pièce (proprement encodé dans &lt;workList&gt;), nous proposons d'observer l'un des conseils donnés dans les guidelines tout en en uniformisant l'encodage. Ainsi, le &lt;title&gt; principal est suivi d'un &lt;title&gt; subordonné précisant que l'objet est ici l'édition numérique et non l'œuvre en elle-même.
</p>

Exemple :
```xml
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <title type="main">Pavane</title>
      <title type="subordinate">A Digital Edition</title>
   </titleStmt>
</fileDesc>
```
<p style="text-align:justify;">
Recommandations : Dans &lt;fileDesc&gt;, il n'est pas nécessaire que le titre dispose d'une granularité fine comparable au renseignement du titre de l'œuvre dans &lt;workList&gt;. Il n'existe cependant aucune restriction. Le plus important est de rester vigilant quant à la hiérarchie des titres spécifiée à l'aide de l'attribut @title dont les valeurs sont contrôlées (pour plus d'information sur les niveaux de titres, voir "Titre alternatif de l'œuvre").
</p>

## b. Compositeur

<a id="COM_ref1"></a>

### Compositeur de l'édition MEI encodée



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique le nom du compositeur de l'œuvre.|COM|




<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <composer xml:id="...">
          <persName role="creator" auth="..." auth.uri="http://..." codedval="...">...</persName>
      </composer>
   </titleStmt>
</fileDesc>

<p style="text-align:justify;">
Recommandations : Le ou les compositeurs renseignés ici ne concernent que l'œuvre encodée dans le fichier MEI et non une œuvre tierce. À noter également que la valeur de rôle est libre. Toutefois, il est conseillé de suivre un thesaurus ou un vocabulaire contrôlé dans un souci de standardisation tels que [VIAF](https://www.oclc.org/fr/viaf.html) Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées (ici aussi, préciser). 
</p>

Exemple :
```xml
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
       <composer xml:id="...">
          <persName role="creator" auth="..." auth.uri="http://..." codedval="...">...</persName>
       </composer>
   </titleStmt>
</fileDesc>
```

<a id="COA_ref1"></a>

### Compositeur attribué à l'édition MEI encodée

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Désigne un compositeur attribué sur la base de preuves internes, externes ou par conjecture.|COA|



 `<composer evidence="...">` 

Autre option : `<persName>`

<p style="text-align:justify;">
Recommandations : La provenance de l’attribution doit être précisée à l'aide de l'attribut @evidence et des valeurs suivantes="internal, external, conjecture".  
</p>

Exemple :
```xml
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <composer xml:id="..." evidence="..." (internal, external or conjecture)>
          <persName role="attributed creator" ("attributed composer"?) auth="..." auth.uri="http://..." codedval="...">...</persName>
      </composer>
   </titleStmt>
</fileDesc>
```
## c. Informations liées à l'édition

<a id="YEP_ref1"></a>

### Éditeur de l'édition électronique 



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Éditeur de l'édition électronique |YEP|
 
 

  
 (ancienne propal)
 ```xml
<fileDesc>
  <titleStmt>
    <respStmt>
       <persName xml:id="VB" role="editor" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
   </respStmt>
  </titleStmt>
</fileDesc> 
    
<fileDesc>
   <titleStmt>
      <editor>
         <persName xml:id="VB" role="editor" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
      </editor>
   </titleStmt>
</fileDesc>
```
Recommandations : 

Exemple :
```xml
<fileDesc>
  <titleStmt>
    <respStmt>
       <persName xml:id="VB" role="editor" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
    </respStmt>
```

<a id="YEC_ref1"></a>

### Date et propriétaire du copyright de l'édition électronique



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Date et propriétaire du copyright de l'édition électronique|YEC|



 

```xml
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
```
<p style="text-align:justify;">
Recommandations : La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise <date> est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".
</p>

Exemple :
```xml
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

### Encodeur de l'édition électronique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Encodeur de l'édition électronique|ENC|



 
```xml
<fileDesc>
   <titleStmt>
      <respStmt>
         <persName xml:id="VB" role="encoder" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
      </respStmt>
   </titleStmt>
</fileDesc>
```

Recommandations : 

Exemple :
```xml
<fileDesc>
   <titleStmt>
      <respStmt>
         <persName xml:id="VB" role="encoder" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
      </respStmt>
   </titleStmt>
</fileDesc>
```

<a id="END_ref1"></a>

### Date d'encodage de l'édition électronique



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Date d'encodage de l'édition électronique|END|



 
```xml
<fileDesc>
   <pubStmt>
      <date isodate="...">...</date>
   </pubStmt>
</fileDesc>
```

Autre option : 

<p style="text-align:justify;">
Recommandations : La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;date&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension.
</p>

Exemple :
```xml
<fileDesc>
   <pubStmt>
      <date isodate="1878-04-13">13 avril 1875</date>
   </pubStmt>
</fileDesc>
```

<a id="EMD_ref1"></a>

### Modification du document électronique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.3 Revision Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerRevisionDescription){:target="_blank"}|Modification du document électronique|EMD|



 
```xml
<revisionDesc>
   <change n="X">
   <date isodate="..."/>
   <resp target="#xmlID">...</resp>
   </change>
</revisionDesc>
```

<p style="text-align:justify;">
Recommandations : À chaque nouvelle édition du fichier, il est recommandé de dresser une description des changements, une date de la nouvelle édition et les personnes ou logiciels impliqué dans les changements. Il est également recommandé que les changements soient présentés dans un ordre anti-chronologique.
</p>

Exemple :
```xml
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

<a id="EEV_ref1"></a>

### Version de l'édition électronique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.3 Revision Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerRevisionDescription){:target="_blank"}|Version de l'édition électronique|EEV|

 
```xml
<revisionDesc>
   <change n="X">
   <date/>
   <resp target="#xmlID">...</resp>
   </change>
</revisionDesc>
```
Autre option : 
```xml
<encodingDesc n="X"> ???
```

<p style="text-align:justify;">
Recommandations : À chaque nouvelle édition du fichier, il est recommandé de dresser une description des changements, une date de la nouvelle édition et les personnes ou logiciels impliqué dans les changements.
</p>

Exemple :
```xml
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

<a id="EFL_ref1"></a>

### Numéro du fichier électronique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Numéro du fichier électronique|EFL|





```xml
 <fileDesc>
 ...
   <seriesStmt @precedes="link vers 3" @follows="link vers 1">
      <title>(titre de la série)</title>
      <identifier>numéro du fichier éléctronique dans cette série</identifier>
```

<p style="text-align:justify;"> 
Recommandations : Lorsque le fichier mei que nos encodons fait parti d'une suite de fichier, nous recommandons d'indiquer les informations concernant cette suite dans l'élément seriesStmt inclus dans fileDesc.
</p>

Exemple (fictif) :
```xml
<seriesStmt @precedes="Bieber_Sonates_du_Rosaire/Ascension.mei" @follows="Bieber_Sonates_du_Rosaire/Crucifixion.mei">
      <title>Les Sonates du Rosaire</title>
      <identifier>11</identifier>
```

<a id="AFR_ref1"></a>

### Désignation de la forme



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.12 Classification](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkClass){:target="_blank"}|Désignation de la forme|AFR|



 
```xml
<classification>
   <termList>
      <term class="#...">...</term>
   </termList>
</classification>
```
Autre option : 


<p style="text-align:justify;"> 
Recommandations : Que ce soit dans l'élément work, expression, manifestation ou item, la désignation de la forme s'inscrit dans l'élément classification. Nous recommandons de tisser un lien vers des `<taxonomy>` dans l'élément `<classDecls>` contenu dans `<encodingDesc>` vers des vocabulaires controllés.
</p>

Exemple :

<a id="YER_ref1"></a>

### Date de mise à disposition de l'édition électronique


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Date de mise à disposition de l'édition électronique|YER|


 
```xml
<pubStmt>
   <availability>
     <useRestrict>
        <date isodate="...">...</date>
     </useRestrict>
   </availability>
</pubStmt>
```

Recommandations : 

Exemple :
```xml
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

<a id="YEM_ref1"></a>

### License



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.3 Publication, Distribution, etc.](https://music-encoding.org/guidelines/v5/content/metadata.html#headerPublicationDistribution){:target="_blank"}|License|YEM|



 
```xml
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
Autre option : 
```xml
<pubStmt xml : id…>
    <availability xml : id…>
       <useRestrict xml : id…>Licence:... </useRestrict>
    </availability>
</pubStmt>
```
Exemple :
```xml
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

<a id="YEN_ref1"></a>

### Pays de copyright

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Pays de copyright|YEN|

 
```xml
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
     <date isodate="2024-01-02">01/02/24</date>
   </availability>
</pubStmt>
```
Exemple :
```xml
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


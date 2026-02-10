---
title: Description du fichier MEI encodé &lt;fileDesc&gt;
layout: default
nav_order: 5
parent: Guideline
permalink: guideline/fileDesc

---

# Description du fichier MEI encodé &lt;fileDesc&gt;
## a. Titre

<a id="OTL_ref1"></a>

### Titre de l'édition MEI


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre|≈ OTL|

<p style="text-align:justify;">
Le titre est une information souvent ambiguë dans les éditions numériques en raison de la confusion qui règne entre le titre de l'œuvre complète, le titre de la partie encodée ou encore le titre de l'édition. D'ailleurs, le vocabulaire Humdrum ne dispose pas de clé spécifique pour cette dernière valeur (La clé « OTL » correspond au titre d'une œuvre, pas de son édition numérique). 
En MEI, dans la partie &lt;fileDesc&gt;, on constate des usages nombreux et divergent. Pourtant, il est manifeste que la balise &lt;title&gt; à l'intérieur de &lt;fileDesc&gt; se réfère au titre de l'édition numérique, au « fichier » lui-même et qui peut être, en théorie, distinct du titre de l'œuvre qu'il encode, même si, en pratique, ces deux niveaux de titres se superposent souvent. Ainsi, pour distinguer le titre de l'édition de celui de la pièce (proprement encodé dans &lt;workList&gt;), nous proposons d'observer l'un des conseils donnés dans les guidelines de music-encoding.org, tout en en uniformisant l'encodage. Le &lt;title&gt; principal, avec l'attribut @type="main", doit être suivi d'un &lt;title&gt; subordonné, avec un @type="subordinate",  précisant que l'objet est ici l'édition numérique et non l'œuvre en elle-même.
</p>

```xml
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <title type="main">Pavane</title>
      <title type="subordinate">A Digital Edition</title>
   </titleStmt>
</fileDesc>
```
<p style="text-align:justify;">

Dans &lt;fileDesc&gt;, il n'est pas nécessaire que le titre dispose d'une granularité fine comparable au renseignement du titre de l'œuvre dans &lt;workList&gt;. Il n'existe cependant aucune restriction. Le plus important est de rester vigilant quant à la hiérarchie des titres spécifiée à l'aide de l'attribut @title dont les valeurs sont contrôlées (pour plus d'information sur les niveaux de titres, voir [Titre alternatif de l'œuvre](guideline/workList.html#OTA_ref1)).
</p>

## b. Compositeur

<a id="COM_ref1"></a>

### Compositeur de l'édition MEI encodée

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique le nom du compositeur de l'œuvre.|COM|

<p style="text-align:justify;">
Le ou les compositeurs renseignés ici ne concernent que l'œuvre encodée dans le fichier MEI et non une œuvre tierce. À noter également que la valeur de rôle est libre. Toutefois, il est conseillé de suivre un thesaurus ou un vocabulaire contrôlé dans un souci de standardisation tels que [VIAF](https://www.oclc.org/fr/viaf.html). Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées. (pour plus d'information sur la gestion des URI d'autorité, voir [le chapitre sur l'autorité](guideline/autorite.html)). 
</p>

```xml
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <title xml:id="...">...</title>
       <composer xml:id="...">
          <persName role="composer" auth="..." auth.uri="http://..." codedval="...">...</persName>
       </composer>
   </titleStmt>
</fileDesc>
```

<a id="COA_ref1"></a>

### Compositeur attribué à l'édition MEI encodée

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Désigne un compositeur attribué sur la base de preuves internes, externes ou par conjecture.|COA|

<p style="text-align:justify;">
Dans certains cas, il apparaît important d'insister sur la provenance de l'attribution d'un compositeur. Nous vous préconisons de renseigner cette information dans la balise &lt;persName&gt; à l'aide de l'attribut @evidence. Cet attribut peut recevoir les valeurs suivantes :
</p>

<ul>
   <li><strong>"internal"</strong> quand cette attribution provient d'une information interne à la source de votre édition.</li>
   <li><strong>"external"</strong> </li> quand cette attribution provient d'une information externe à la source de votre édition.</li>
   <li><strong>"conjecture"</strong> </li> quand cette attribution provient d'un éditeur ou d'un chercheur sur la base de son expertise.</li>
</ul>

<p style="text-align:justify;">
Par ailleurs, le niveau de certitude accordé à cette attribution peut également être précisé à l'aide de l'attribut @cert dont les valeurs vont de "high", pour le plus grand degré de confiance, à "medium", puis "low" pour le niveau de certitude le plus faible. Il est également possible d'indiquer "unknown" quand cette évaluation est impossible.
</p>

<!-- ABC : J'ai choisi @role="composer" plutôt que @role="creator", pour permettre, en extrayant tous les <persName/> d'un fichier MEI d'avoir le rôle directement dans l'élément plutôt que dans son contexte (Sans cela, il faudrait remonter les balises parents pour récupérer cette information.) Pour la même raison, je préconise de toujours mettre les attributs d'evidence et de certitude sur le <persName/> -->

```xml
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
   <title xml:id="...">...</title>
      <composer xml:id="...">
          <persName evidence="(internal, external ou conjecture)" role="composer" auth="..." auth.uri="http://..." codedval="...">...</persName> 
      </composer>
   </titleStmt>
</fileDesc>
```

<p style="text-align:justify;">
Lorsque l'attribution est faite par conjecture, il est important de renseigner l'identité du responsable de cette attribution. Il convient donc de renseigner son identité dans &lt;respStmt&gt; contenu dans &lt;titleStmt&gt; avec l'ensemble des personnes disposant d'une responsabilité éditoriale. Une fois cela fait, nous pouvons le relier à l'identité du compositeur qu'il attribue en inscrivant dans @resp la valeur de l'attribut @xml:id.
Dans l'exemple ci-dessous, nous avons attribué "ID" pour le @xml:id du chercheur qui a attribué le compositeur. On a donc reporté son "ID" précédé d'un "#" dans l'attribut @resp du compositeur.
</p>

```xml
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <title xml:id="...">...</title>
       <respStmt xml:id="...">
          <persName xml:id="ID" role="scholar" auth="..." auth.uri="http://..." codedval="...">(Nom du responsable de l'attribution)</persName>
       </respStmt>
       <composer xml:id="...">
         <persName xml:id="..." evidence="conjecture" cert="high" resp="#ID">(Nom du compositeur)</persName>
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
 
<p style="text-align:justify;">
L'identité de l'éditeur de l'édition numérique est à inscrire dans la balise &lt;respStmt&gt; qui se trouve dans le &lt;titleStmtt&gt; de &lt;fileDesc&gt;.
</p>

<!-- ABC : À l'instar de la balise <composer>, j'imagine qu'il est mieux de conserver la balise <editor>. -->

 ```xml
<fileDesc>
  <titleStmt>
   <title>...</title>
    <respStmt>
      <editor>
       <persName xml:id="VB" role="editor" auth="Orcid" auth.uri="..." codedval="...">XXX</persName>
       </editor>
   </respStmt>
  </titleStmt>
</fileDesc> 
```

<a id="YEC_ref1"></a>

### Date et propriétaire du copyright de l'édition électronique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Date et propriétaire du copyright de l'édition électronique|YEC|

<p style="text-align:justify;">
Dans le cas d'une édition électronique sous copyright, toutes les informations relevant de cette restriction juridique sont à inscrire dans la balise &lt;useRestrict&gt; contenu dans &lt;avaibility&gt; de &lt;pubStmt&gt;.
</p>

```xml
<fileDesc>
   ...
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
 Toutes les dates inscrites dans le fichier MEI peuvent être nuancées ou approchées à l'aide d'attributs, surtout dans le cas de dates incertaines. En MEI, une date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;datec&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs vont de "high", pour le plus grand degré de confiance, à "medium", puis "low" pour le niveau de certitude le plus faible.
</p>

```xml
<date isodate="2022">2022</date>
<date isodate="2022-02">Février 2022</date>
<date isodate="2022-02-22">22 Février 2022</date>
```

<a id="ENC_ref1"></a>

### Encodeur de l'édition électronique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Encodeur de l'édition électronique|ENC|

<p style="text-align:justify;">
L'identité de l'encodeur de l'édition numérique est à inscrire dans la balise &lt;respStmt&gt; qui se trouve dans le &lt;titleStmtt&gt; de &lt;fileDesc&gt;, nous préconisons l'emploi du terme "encoder" dans l'attribut @role.
</p>

```xml
<fileDesc>
   <titleStmt>
      <title>...</title>
      <respStmt>
         <persName xml:id="VB" role="encoder" auth="Orcid" auth.uri="..." codedval="...">(Nom d'une personne ayant encodé le fichier MEI)</persName>
      </respStmt>
   </titleStmt>
</fileDesc>
```

<a id="YER_ref1"></a>

### Date d'encodage / de mise à disposition de l'édition électronique

<!-- ABC : J'ai fusionné les concepts Humdrum de date d'encodage et celle de mise à disposition de l'édition électronique.  -->
 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Date d'encodage de l'édition électronique|END & YER|

<p style="text--align:justify;">
La date de l'encodage initial de votre édition électronique peut être inscrite dans la balise &lt;pubStmt&gt;. Pour tout ce qui concerne ses mises à jour, nous vous invitons à consulter le point suivant.</p> [Modification du document électronique](EMD_ref1).

```xml
<fileDesc>
   <pubStmt>
      <date isodate="2026-02-09">9 Février 2026</date>
   </pubStmt>
</fileDesc>
```

<p style="text-align:justify;">
 Toutes les dates inscrites dans le fichier MEI peuvent être nuancées ou approchées à l'aide d'attributs, surtout dans le cas de dates incertaines. En MEI, une date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;datec&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs vont de "high", pour le plus grand degré de confiance, à "medium", puis "low" pour le niveau de certitude le plus faible.
</p>

```xml
<date isodate="2022">2022</date>
<date isodate="2022-02">Février 2022</date>
<date isodate="2022-02-22">22 Février 2022</date>
```

<a id="EEV_ref1"></a>

### Modification / Version du document électronique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.3 Revision Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerRevisionDescription){:target="_blank"}|Modification du document électronique|EMD & EEV|

<p style="text-align:justify;">
 À chaque nouvelle édition du fichier après sa publication initiale, il est recommandé de dresser une description des changements comprenant la date de la nouvelle édition, un paragraphe indiquant les changements ayant eu lieu et en liant les personnes ou logiciels impliqué dans ces changements. Chaque changement prend un numéro et il est également recommandé qu'ils soient présentés dans un ordre anti-chronologique.
 Le noms des différents agents responsable de ces modifications doivent être reliés à leurs identités déclarés dans &lt;respStmt&gt; en rajoutant un "#" au @xml:id correspondant.
</p>

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

<p style="text-align:justify;"> 
 Lorsque le fichier mei que nos encodons fait partie d'une suite de fichier, nous recommandons d'indiquer les informations concernant cette suite dans l'élément &lt;seriesStmt&gt; inclus dans &lt;fileDesc&gt; comme suit :
</p>

```xml
   <seriesStmt @precedes="lien vers le fichier suivant" @follows="lien vers le fichier précédent">
      <title>(titre de la série)</title>
      <identifier>numéro du fichier éléctronique dans cette série</identifier>
   </seriesStmt>
```

<p style="text-align:justify;"> 
Voici un exemple (fictif) qu'on retrouverait dans un fichier MEI encodant la onzième sonate de Bieber, comprises dans la série "Les Sonates du Rosaire".
</p>

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

 <p style="text-align:justify;"> 
 Que ce soit dans l'élément &lt;work&gt;, &lt;expression&gt;, &lt;manifestation&gt; ou &lt;item&gt;, la désignation de la forme s'inscrit dans l'élément classification. Nous recommandons de tisser un lien vers des &lt;taxonomy&gt; dans l'élément &lt;classDecls&gt; contenu dans &lt;encodingDesc&gt; vers des vocabulaires controllés.
</p>

```xml
<encodingDesc>
   <classDecls>
      <taxonomy auth="DOREMUS" auth.uri="http://data.doremus.org/vocabulary/diabolo/genre/">
         <head>Vocabulaire controllé des genres</head>
         <desc>   
            Liste des genres musicaux provenant de Diabolo de Radio France.
         </desc>
      </taxonomy>
   </classDecls>
</encodingDesc>

   <classification>
      <termList>
         <term class='https://data.doremus.org/vocabulary/diabolo/genre/opera'>Opéra</term>
      </termList>
   </classification>

```

<a id="YEM_ref1"></a>

### License et pays du copyright

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.3 Publication, Distribution, etc.](https://music-encoding.org/guidelines/v5/content/metadata.html#headerPublicationDistribution){:target="_blank"}|License|YEM|
 
 <p style="text-align:justify;"> 
Votre édition électronique peut être soumise à des restrictions d'utilisation, telles que des limitations concernant sa reproduction, sa publication ou la citation de son contenu, notamment pour des raisons liées aux droits d’auteur. Dans ce cas, vous pouvez indiquer ces restrictions dans la balise &lt;useRestrict&gt;, intégrée à l'élément &lt;avaibility&gt; de &lt;pubStmt&gt;. À l'inverse, l'absence de restrictions peut également y être signalée, par exemple lorsque les droits sont tombés dans le domaine public.

Le pays dans lequel le document électronique a été créé, ou depuis lequel le droit d'auteur a été établi, correspond au pays selon la législation duquel la déclaration de droit doit être interprétée. Cette information est renseignée au moyen de la balise &lt;country&gt;, placée à l'intérieur de &lt;useRestrict&gt;.

Il est important de distinguer &lt;useRestrict&gt;, qui concerne les conditions d'utilisations, de &lt;acessRestrict&gt;, qui précise les modalités d'accès à une ressource.
</p>



```xml
<pubStmt>
   <availability>
     <useRestrict>
         <persName>...</persName>
         <corpName>...</corpName>
         <country>France</country>
         <date isodate="2024">2024</date>
         <head>Licence</head>
         <p>CC-BY-NC</p>
     </useRestrict>
   </availability>
</pubStmt>
```

<p style="text-align:justify;"> 
 Toutes les dates inscrites dans le fichier MEI peuvent être nuancées ou approchées à l'aide d'attributs, surtout dans le cas de dates incertaines. En MEI, une date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;datec&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs vont de "high", pour le plus grand degré de confiance, à "medium", puis "low" pour le niveau de certitude le plus faible.
</p>

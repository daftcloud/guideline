---
title: Description du fichier MEI encodé &lt;fileDesc&gt;
layout: default
nav_order: 5
parent: Le guide
permalink: guide/fileDesc

---

# Description du fichier MEI encodé &lt;fileDesc&gt;

<p style="text-align:justify;"> 
L'élément &lt;fileDesc&gt; comprends toutes les informations qui concernent le fichier MEI en tant que tel (i. e. un fichier XML dédié à de l'encodage musical)
</p>

<a id="OTL_ref1"></a>

## Titre de l'édition MEI


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre|OTL|

<p style="text-align:justify;">
Le titre est une information souvent ambiguë dans les éditions numériques en raison de la confusion qui règne entre le titre de l'œuvre complète, le titre de la partie encodée ou encore le titre de l'édition. D'ailleurs, le vocabulaire Humdrum ne dispose pas de clé spécifique pour cette dernière valeur (la clé « OTL » correspond au titre d'une œuvre et non à celui de son édition numérique). 
En MEI, dans la partie &lt;fileDesc&gt;, on constate des usages nombreux et divergents. Pourtant, il est manifeste que la balise &lt;title&gt; à l'intérieur de &lt;fileDesc&gt; se réfère au titre de l'édition numérique, au « fichier » lui-même qui peut être, en théorie, distinct du titre de l'œuvre qu'il encode, même si, en pratique, ces deux niveaux de titres se superposent souvent. Ainsi, pour distinguer le titre de l'édition de celui de la pièce (proprement encodé dans [&lt;work&gt;](guide/workList.html#OTL_ref3)), nous proposons d'observer l'un des conseils donnés dans les guidelines MEI tout en en uniformisant l'encodage. Le &lt;title&gt; principal, avec l'attribut @type="main", doit être suivi d'un &lt;title&gt; subordonné, avec un @type="subordinate" ayant pour valeur "A Digital Edition" (ou quelque chose de similaire), précisant ainsi que l'objet est ici l'édition numérique et non l'œuvre en elle-même.
</p>

```xml
<fileDesc>
   <titleStmt>
      <title type="main">Pavane</title>
      <title type="subordinate">A Digital Edition</title>
   </titleStmt>
</fileDesc>
```
<p style="text-align:justify;">

Dans &lt;fileDesc&gt;, il n'est pas nécessaire que le titre dispose d'une granularité fine comparable au renseignement du titre de l'œuvre dans [&lt;work&gt;](guide/workList.html#OTL_ref3). Il n'existe cependant aucune restriction. Le plus important est de rester vigilant quant à la hiérarchie des titres spécifiée à l'aide de l'attribut @type dont les valeurs sont contrôlées. Pour plus d'information sur les niveaux de titres, voir [Titre alternatif de l'œuvre](guide/manifestationList.html#OTA_ref1)).
</p>

<a id="COM_ref1"></a>

## Compositeur de l'oeuvre encodée

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique le nom du compositeur de l'œuvre.|COM|

### Compositeur.ice connu.e
<p style="text-align:justify;">
Le, la ou les compositeur.ices renseigné.es ici ne concernent que l'œuvre encodée dans le fichier MEI et non une œuvre tierce. Le renseignement de cette information dans &lt;fileDesc&gt; peut être surprenante, mais cette information étant élémentaire pour définir l'oeuvre, elle caractérise donc le fichier MEI lui-même (à l'instar du titre de l'oeuvre abordé précédemment). Si l'élément &lt;composer&gt; peut accueillir directement l'individu en question, nous privilégions d'utiliser l'élément enfant &lt;persName&gt; qui permet de préciser davantage l'identité d'une personne. À noter également que la valeur de rôle est libre, mais dans un souci d'homogénéité, nous conseillons de lui attribuer la valeur "composer" présent dans le thesaurus Relationship Designators for Agents. Pour finir, nous préconisons également de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées. En l'occurrence, un référentiel comme le VIAF serait judicieux. Pour plus d'information sur la gestion des URI d'autorité, voir [le chapitre sur l'autorité](guide/thesauri.html)). 
</p>

```xml
<fileDesc>
   <titleStmt>
      <title>...</title>
       <composer>
          <persName role="composer" auth="VIAF" auth.uri="https://viaf.org/fr/viaf/32197206">Wolfgang Amadeus Mozart</persName>
       </composer>
   </titleStmt>
</fileDesc>
```

### Oeuvre anonyme 
<p style="text-align:justify;">
Dans le cas d'une oeuvre anonyme, nous conseillons de garder la structure précédente, pour des questions d'interopérabilité, tout en signalant, pour valeur de l'élément &lt;persName&gt;, "Anonymous". Bien entendu, aucun URI relié à un individu ne peut être ajouté. Ainsi, les attributs concernés n'ont plus de raison d'être.
</p>

```xml
<fileDesc>
   <titleStmt>
      <title>...</title>
       <composer>
          <persName role="composer">Anonymous</persName>
       </composer>
   </titleStmt>
</fileDesc>
```

<a id="COA_ref1"></a>

### Compositeur attribué

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Désigne un compositeur attribué sur la base de preuves internes, externes ou par conjecture.|COA|


<p style="text-align:justify;">
Dans certains cas, il apparaît important d'insister sur la provenance de l'attribution d'un.e compositeur.ice. Nous vous préconisons de renseigner cette information dans la balise &lt;composer&gt; à l'aide de l'attribut @evidence. Cet attribut peut recevoir les valeurs suivantes :
</p>


<strong>"internal"</strong> quand cette attribution provient d'une information interne à la source de votre édition.


<strong>"external"</strong> quand cette attribution provient d'une information externe à la source de votre édition.


<strong>"conjecture"</strong> quand cette attribution provient d'un éditeur ou d'un chercheur sur la base de son expertise.


<p style="text-align:justify;">
Par ailleurs, le niveau de certitude accordé à cette attribution peut également être précisé à l'aide de l'attribut @cert dont les valeurs contrôlées vont de "high", pour le plus grand degré de confiance, à "low" pour le niveau de certitude le plus faible, en passant par "medium". Il est également possible d'indiquer "unknown" quand cette évaluation est impossible.
</p>

```xml
<fileDesc>
   <titleStmt>
      <title>
         ...
      </title>
      <composer evidence="internal" cert="high">
         <persName role="composer" auth="VIAF" auth.uri="https://viaf.org/fr/viaf/32197206">Wolfgang Amadeus Mozart</persName>
            ...
         </persName> 
      </composer>
   </titleStmt>
</fileDesc>
```

<p style="text-align:justify;">
Lorsque l'attribution est faite par conjecture, il est important de renseigner l'identité du responsable de cette attribution. Il convient donc de renseigner son identité dans &lt;respStmt&gt; contenu dans &lt;titleStmt&gt; avec l'ensemble des personnes disposant d'une responsabilité éditoriale. Une fois cela fait, nous pouvons le relier à l'identité du ou de la compositeur.ice attribué.e en inscrivant dans @resp la valeur de l'attribut @xml:id.
Dans l'exemple ci-dessous, nous avons attribué "KR" pour le @xml:id du chercheur qui a attribué le compositeur. On a donc reporté son ID précédé d'un "#" dans l'attribut @resp du compositeur. Attention, chaque @xml:id doit être unique dans tout le document MEI et doit commencer par une lettre (A-Z, a-z). Dans les exemples proposés, sauf si nécessaire, nous avons décidé de ne pas renseigner des @xml:id pour tous les éléments pour des questions de lisibilité. Bien entendu, leur présence, souvent générée automatiquement (et aléatoirement), est nécessaire pour créer du lien dans une édition MEI !
 
</p>

```xml
<fileDesc">
   <titleStmt>
      <title>...</title>
       <respStmt>
          <persName xml:id="KR" role="encoder" auth="Orcid" auth.uri="https://orcid.org/0000-0003-1013-7978">
          Kévin Roger</persName>
       </respStmt>
       <composer evidence="conjecture" cert="high" resp="#KR">
         <persName role="composer" auth="VIAF" auth.uri="https://viaf.org/fr/viaf/32197206">Wolfgang Amadeus Mozart</persName>
       </composer>
   </titleStmt>
</fileDesc>
```

<a id="YEP_ref1"></a>

## Éditeur de l'édition numérique 

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Éditeur de l'édition électronique |YEP|
 
<p style="text-align:justify;">
L'identité de l'éditeur.ice de l'édition numérique est à inscrire dans la balise &lt;respStmt&gt; qui se trouve dans l'élément  &lt;editor&gt; dans &lt;titleStmt&gt;. Attention, il s'agit donc ici de renseigner l'éditeur.ice de l'édition MEI et non un.e éditeur.ice "historique". Comme dans l'exemple précédent, l'identité de la personne peut être précisée à l'aide d'un identifiant pérenne (URI). Pour les personnes oeuvrant dans le cadre de l'édition MEI, nous préconisons l'usage d'Orcid. À ce propos, voir le chapitre "Référentiels d'autorités et thesauri". 
</p>
<p style="text-align:justify;">
L'éditeur peut également être un établissement ou une institution, notamment dans le cadre d'éditions menées au sein de projets de recherche. Bien que nous conseillons de renseigner les individus concernés pour des raisons éthiques, l'élément &lt;corpName&gt; peut également être utilisé. Dans ce cas, nous conseillons également d'indiquer un identifiant issu, de préférence, du référentiel [ROR](https://ror.org/).

 ```xml
<fileDesc>
  <titleStmt>
   <title>...</title>
    <respStmt>
      <editor>
       <persName xml:id="KR" role="editor" auth="Orcid" auth.uri="https://orcid.org/0000-0003-1013-7978">Kévin Roger</persName>
       <corpName xml:id="corp_edit" role="editor" auth="ROR" auth.uri="https://ror.org/00xngy573">CRULH</corpName>
      </editor>
   </respStmt>
  </titleStmt>
</fileDesc> 
```

<a id="ENC_ref1"></a>

### Contributeur, financement et sponsoring

<p style="text-align:justify;">
Dans &lt;titleStmt&gt;, il est également possible d'aller plus loin dans la description du contexte de réalisation de l'édition, notamment lorsque celle-ci est financée ou menée dans le cadre d'un laboratoire, d'une équipe de recherche ou d'un projet scientifique. La MEI permet  de renseigner des éléments tels que &lt;contributor&gt;, &lt;funder&gt; ou encore &lt;sponsor&gt;. Il est recommandé de documenter ces informations afin de garantir la transparence de la production scientifique, de valoriser les différents acteurs impliqués dans le projet et de favoriser la réutilisation des métadonnées. À cet égard, une distinction peut être opérée entre les différents rôles. L'élément &lt;contributor&gt; désigne les personnes ou les institutions ayant apporté une contribution intellectuelle, scientifique ou technique à l'édition, sans pour autant en assumer la responsabilité principale. L'élément &lt;funder&gt; identifie les organismes ou les personnes ayant assuré le financement du projet, qu'il s'agisse d'agences de financement, d'universités, de fondations ou d'autres institutions. Enfin, &lt;sponsor&gt; désigne une personne ou un organisme qui soutient ou parraine le projet à travers son autorité intellectuelle.
</p>

```xml
<fileDesc>
  <titleStmt>
   <title>...</title>
    <respStmt>
      <editor>
       <persName xml:id="KR" role="editor" auth="Orcid" auth.uri="https://orcid.org/0000-0003-1013-7978">Kévin Roger</persName>
      </editor>
   </respStmt>
   <contributor>
       <persName xml:id="VB auth="Orcid" auth.uri="https://orcid.org/0000-0001-5618-8602"">
            Vincent Besson
       </persName>
      <funder>
         <corpName xml:id="corp_anr" uri="ROR" auth.uri="https://ror.org/02feahw73">
            Agence nationale de la recherche
         </corpName>
      </funder>
      <sponsor>
         <corpName xml:id="corp_humanum" uri="ROR" auth.uri="https://ror.org/03z6jp965">
            Huma-Num
         </corpName>
      </sponsor>
   </titleStmt>
```


## Encodeur de l'édition numérique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Encodeur de l'édition électronique|ENC|

<p style="text-align:justify;">
L'identité de l'encodeur de l'édition numérique est à inscrire dans la balise &lt;respStmt&gt; qui se trouve dans le &lt;titleStmtt&gt; de &lt;fileDesc&gt;, nous préconisons l'emploi du terme "encoder" dans l'attribut @role. Remarquez qu'il n'existe pas d'élément "encoder" en MEI. Ainsi, la précision de cette fonction ne peut se passer de l'attribut @role dont la valeur est ici "encoder". À noter également que si l'éditeur du fichier est également l'encodeur, il est toujours préférable de le signaler explicitement en renseignant à nouveau son identité en tant qu'encodeur. 
</p>

```xml
<fileDesc>
   <titleStmt>
      <title>...</title>
      <respStmt>
         <persName xml:id="VB" role="encoder" auth="Orcid" auth.uri="https://orcid.org/0000-0001-5618-8602">
            Vincent Besson 
         </persName>
      </respStmt>
   </titleStmt>
</fileDesc>
```

<a id="YER_ref1"></a>


## Date d'encodage/de mise à disposition de l'édition numérique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Date d'encodage de l'édition électronique|END & YER|


<p style="text--align:justify;">
La date de l'encodage initial de votre édition peut être inscrite dans la balise &lt;pubStmt&gt;. Pour tout ce qui concerne ses mises à jour, nous vous invitons à consulter le point suivant : [Modification du document électronique](EEV_ref1).</p>


```xml
<fileDesc>
   <pubStmt>
      <date isodate="2026-02-09">9 Février 2026</date>
   </pubStmt>
</fileDesc>
```

<p style="text-align:justify;">
Toutes les dates inscrites dans le fichier MEI peuvent être nuancées ou approchées à l'aide d'attributs, surtout dans le cas de dates incertaines. En MEI, une date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;date&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert abordé précédemment. Pour rappel, ses valeurs vont de "high", pour le plus grand degré de confiance, à "medium" puis "low" pour le niveau de certitude le plus faible.
</p>


```xml
<date isodate="2022">2022</date>
<date isodate="2022-02">Février 2022</date>
<date isodate="2022-02-22">22 Février 2022</date>
```

<a id="EEV_ref1"></a>


## Modification/version du document numérique


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.3 Revision Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerRevisionDescription){:target="_blank"}|Modification du document électronique|EMD & EEV|

<p style="text-align:justify;">
 À chaque nouvelle édition du fichier après sa publication initiale, il est recommandé de dresser une description des changements comprenant la date de la nouvelle édition, un paragraphe indiquant les changements ayant eu lieu et les personnes ou logiciels impliqués dans ces changements. Tous les changements acceptent un numéro et il est également recommandé qu'ils soient présentés dans un ordre anti-chronologique.
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
      <date isodate="2023-08-20"/>
      <resp>GallicOvuM</resp>
   </change>
</revisionDesc>
```

<a id="EFL_ref1"></a>

## Numéro du fichier numérique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Numéro du fichier électronique|EFL|

<p style="text-align:justify;"> 
 Lorsque le fichier MEI que nos encodons fait partie d'une suite de fichier (un mouvement par fichier, oeuvre cyclique, etc.), nous recommandons d'indiquer les informations concernant cette suite dans l'élément &lt;seriesStmt&gt; inclus dans &lt;fileDesc&gt; comme suit :
</p>

```xml
<seriesStmt @precedes="lien vers le fichier suivant" @follows="lien vers le fichier précédent">
   <title>(titre de la série)</title>
   <identifier>numéro du fichier électronique dans cette série</identifier>
</seriesStmt>
```

<p style="text-align:justify;"> 
Voici un exemple (fictif) qu'on retrouverait dans un fichier MEI encodant la Sonate No. 11 de Heinrich Bieber, comprise dans la série "Les Sonates du Rosaire".
</p>

```xml
<seriesStmt @precedes="Bieber_Sonates_du_Rosaire/Ascension.mei" @follows="Bieber_Sonates_du_Rosaire/Crucifixion.mei">
   <title>Les Sonates du Rosaire</title>
   <identifier>11</identifier>
</seriesStmt>
```

<a id="AFR_ref1"></a>

## Désignation de la forme

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
         <head>Vocabulaire controlé des genres</head>
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

## License et pays du copyright de l'édition numérique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.3 Publication, Distribution, etc.](https://music-encoding.org/guidelines/v5/content/metadata.html#headerPublicationDistribution){:target="_blank"}|License|YEM|
 
 <p style="text-align:justify;"> 
Votre édition peut être soumise à des restrictions d'utilisation, telles que des limitations concernant sa reproduction, sa publication ou la citation de son contenu, notamment pour des raisons liées aux droits d’auteur. Dans ce cas, vous pouvez indiquer ces restrictions dans la balise &lt;useRestrict&gt;, intégrée à l'élément &lt;avaibility&gt; de &lt;pubStmt&gt;. À l'inverse, l'absence de restrictions peut également y être signalée, par exemple lorsque les droits sont tombés dans le domaine public.

Le pays dans lequel le document électronique a été créé, ou depuis lequel le droit d'auteur a été établi, correspond au pays selon la législation duquel la déclaration de droit doit être interprétée. Cette information est renseignée au moyen de la balise &lt;country&gt;, placée à l'intérieur de &lt;useRestrict&gt;. À noter que dans le cadre d'éditions numériques, les licences [Creative Commons](https://creativecommons.org/cc-licenses/) peuvent être particulièrement pratiques.

Pour finir, il est important de distinguer &lt;useRestrict&gt; qui concerne les conditions d'utilisations, de l'élément &lt;accessRestrict&gt; qui précise les modalités d'accès à une ressource.
</p>

```xml
<pubStmt>
   <availability>
     <useRestrict>
         <persName>...</persName>
         <corpName>...</corpName>
         <country>France</country>
         <date>...</date>
         <head>Licence</head>
         <p>CC-BY-NC</p>
     </useRestrict>
     <accessRestrict>
         <p>Access to this MEI file requires a user account in the AXY Database</p>
     </accessRestrict>
   </availability>
</pubStmt>
```

<a id="YEC_ref1"></a>

## Date et propriétaire du copyright de l'édition numérique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.2. Responsibility Attribution](https://music-encoding.org/guidelines/v5/content/metadata.html#headerrespstatement){:target="_blank"}|Date et propriétaire du copyright de l'édition électronique|YEC|

<p style="text-align:justify;">

Toutes les informations relevant de la restriction juridique sont à inscrire dans la balise &lt;useRestrict&gt; contenu dans &lt;avaibility&gt; de &lt;pubStmt&gt;. Le propriétaire du copyright, qu'il soit question d'une personne ou d'une institution, doit être renseigné dans &lt;persName&gt; ou &lt;corpName&gt;. À nouveau, il est préférable de préciser les individus ou établissements concernés à l'aide d'un identifiant pérenne, comme ci-dessous : 
</p>

```xml
<fileDesc>
   ...
   <pubStmt>
   <availability>
     <useRestrict>
         <persName auth="Orcid" auth.uri="https://orcid.org/0000-0001-5618-8602">Vincent Besson</persName>
         <corpName auth="ROR" auth.uri="https://ror.org/03cv31q28">CESR</corpName>
         <country>France</country>
         <date>2024</date>
         <head>Licence</head>
         <p>CC-BY-NC</p>
     </useRestrict>
     <accessRestrict>
         <p>No access restrictions</p>
     </accessRestrict>
   </availability>
</pubStmt>
```

<p style="text-align:justify;">
 
Pour rappel, toutes les dates inscrites dans le fichier MEI peuvent être approchées à l'aide d'attributs. Une date doit suivre la norme ISO 8601 (AAAA-MM-JJ), bien que la valeur de la balise &lt;date&gt; soit libre. Nous conseillons toutefois de suivre la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour garantir sa bonne compréhension et réutilisation. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs vont de "high" à "low" en passant par "medium".
</p>

```xml
<date isodate="2022">2022</date>
<date isodate="2022-02">Février 2022</date>
<date isodate="2022-02-22">22 Février 2022</date>
```

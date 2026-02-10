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

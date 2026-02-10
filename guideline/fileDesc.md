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

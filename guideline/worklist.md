---
title: Description de l'œuvre musicale &lt;workList&gt;
layout: default
nav_order: 7
parent: Guideline
permalink: /guideline/workList
---

# Description de l'œuvre musicale &lt;workList&gt;
## a. Titre

<a id="OTL_ref2"></a>

### Titre de l'œuvre musicale


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre de l'œuvre|≈ OTL|



`<title type=main>`/`<title type="subordinate">`

Autre option : `<title>`

<p style="text-align:justify;"> 
 Les deux exemples ci-dessous explicitent l'inscription du titre de l'œuvre dans un premier temps au niveau de l'œuvre elle-même, puis au niveau de son expression.
</p>


```xml
"<workList xml:id="...">
   <work xml:id="...">
      <title xml:id="...">...</title>
   </work>
</workList>"
```

```xml
"<workList xml:id="...">
   <work xml:id="...">
      <title xml:id="...">  
      <expressionList xml:id="...">  
        <expression xml:id="...">
        </expression>
      </expressionList>
      </title>
   </work>
</workList>"
```

<a id="OTL_ref3"></a>

### Titre de l'œuvre 



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Titre de l'œuvre encodée.|OTL|



`<title>`

Autre option : -

<p style="text-align:justify;"> 
 Cette manière minimale de renseigner le titre convient surtout aux titres officiels et consensuels des œuvres - des titres qui ne font pas l'objet d'ambiguité. Pour le renseignement de titres alternatifs ou populaires, voir plus bas.
</p>



Titre simple d'une œuvre :
```xml
<workList xml:id="...">
   <work xml:id="...">
      <title xml:id="...">Pavane pour une infante défunte</title>
   </work>
</workList>
```

<p style="text-align:justify;"> 
 Dans le cas de sections ou de mouvements d'une œuvre, il est nécessaire de faire une distinction entre le titre de la partie encodée et l'œuvre globale. Pour cela, il est nécessaire d'utiliser l'attribut @type et la valeur "uniform". De même, afin de mieux catégoriser les différents niveaux de titres, il est conseillé d'employer `<titlePart>`. La valeur "subordinate" peut être pratique pour hiérarchiser les divers syntagmes d'un même niveau de titre, comme le mouvement ou numéro d'opus.
</p>

### Titre d'un mouvement d'une œuvre 

```xml
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
<p style="text-align:justify;"> 
 Il est à noter que le renseignement du titre, métadonnée de première importance, est paradoxalement négligé dans les guidelines MEI. Divers exemples suggèrent une distinction minimale des niveaux de titres et une certaine liberté dans leur troncation. La raison réside certainement dans l'ambiguïté qui dérive des différentes formes de titres et de leurs usages multiples. Bien que @type soit régi par les valeurs contrôlées listées ci-dessus, les guidelines illustrent à l'occasion l'usage non conventionnel de @type="subtitle" pour encoder un syntagme subordonné au titre principal. Nous nous limiterons ici aux seuls vocables contrôlés précisés précédemment.
</p>

<a id="OTP_ref1"></a>

### Titre courant de l'œuvre

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 | - |Titre populaire de l'œuvre encodée.|OTP|



 `<title type="alternative">`

Autre option : -

<p style="text-align:justify;"> 
 Le titre courant peut facilement se confondre avec le titre alternatif (voir ci-dessous). Sur ce point, seuls les usages peuvent apporter des réponses. Dans le doute, il est préférable de privilégier le titre alternatif, moins restrictif que le sens sous-entendu par titre "courant". Par ailleurs, @type dispose de valeurs contrôlées en MEI ("main", "subordinate", "abbreviated", "alternative", "translated", "uniform" et "desc") parmi lesquelles aucune ne couvre l'acception d'un titre "populaire". Pour l'usage de ces valeurs, voir ci-dessous dans "Titre alternatif de l'œuvre"
</p>


```xml
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

<a id="OTA_ref1"></a>

### Titre alternatif de l'œuvre

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Autre titre de l'œuvre encodée, distinct du titre principal.|OTA|



 `<title type="alternative">`

Autre option, en fonction du contexte : `<title type="subordinate">`; `<title type="abbreviated">`; `<title type="translated">`; `<title type="uniform">`; `<title type="desc">`

<p style="text-align:justify;"> 
 Comme dit plus haut, l'attribut "alternative" demeure le plus simple pour renseigner un titre différent du titre officiel de l'œuvre encodée. Toutefois, l'attribut @type dispose d'autres valeurs contrôlées, listées précédemment, qui peuvent affiner la nature du titre renseigné. Ainsi, dans l'exemple ci-dessous, apparaissent deux niveaux de titres (titre du mouvement encodé et titre de l'œuvre globale) ainsi que leurs diverses formes potentielles.
</p>


```xml
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

<a id="OPR_ref1"></a>

### Titre de l'œuvre d'appartenance

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre de l'œuvre globale dans le cas d'une section ou d'un mouvement.|OPR|



 `<title type="main">` ; `<title type="uniform">`

Autre option : 

<p style="text-align:justify;"> 
 Comme dit précédemment, si diverses formes de titre sont retenues dans l'édition, il est conseillé de structurer les différents niveaux à l'aide de `<titlePart>`, surtout si des valeurs semblables pour @type sont utilisées à la fois pour le titre du mouvement et pour le titre de l'œuvre d'appartenance. Dans l'exemple ci-dessous, la description minimale ne nécessite pas une telle distinction.  
</p>


```xml
<workList>
   <work>
      <title type="main">Rondo alla Turca</title>
      <title type="abbreviated">Alla Turca</title>
      <title type="alternative">Marche Turque</title>
      <title type="uniform">Sonate pour piano no. 11 en la majeur</title>
   </work>
</workList>  
```

## b. Compositeur, librettiste, etc.

<a id="COM_ref2"></a>

### Compositeur de l'œuvre musicale



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique le nom du compositeur de l'œuvre.|COM|



 `<composer>`

Autre option : `<persName role="composer">`

<p style="text-align:justify;"> 
 Le ou les compositeurs renseignés ici ne concernent que l'œuvre encodée dans le fichier MEI et non une œuvre tierce. À noter également que la valeur de rôle est libre. Toutefois, il est conseillé de suivre un thesaurus ou un vocabulaire contrôlé dans un souci de standardisation tels que [VIAF](https://www.oclc.org/fr/viaf.html). Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées (ici aussi, préciser). 
</p>


```xml
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="...">
          <persName role="composer" auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="...">...</persName>
      </composer>
   </work>
</workList>
```

```xml
<workList xml:id="...">
   <work xml:id="...">
      <expressionList xml:id="...">  
        <expression xml:id="...">
          <composer xml:id="...">
            <persName role="composer" auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="..." >...</persName>
          </composer>
        </expression>
      </expressionList>
   </work>
</workList>
```


<a id="COA_ref2"></a>

### Compositeur attribué

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Désigne un compositeur attribué sur la base de preuves internes, externes ou par conjecture.  | COA |



 `<composer evidence="...">` 

Autre option : `<persName>`

<p style="text-align:justify;"> 
 La provenance de l’attribution doit être précisée à l'aide de l'attribut @evidence et des valeurs suivantes="internal, external, conjecture".  
</p>


```xml
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="..." evidence="..." (internal, external or conjecture)>
          <persName auth="..." auth.uri="http://..." codedval="...">...</persName>
      </composer>
   </work>
</workList>
```

<a id="COS_ref1"></a>

### Compositeur soupçonné

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Désigne un compositeur soupçonné avec un niveau de certitude.|COS|



 `<composer>`

Autre option : `<persName>`

<p style="text-align:justify;"> 
 Il est conseillé d’utiliser l’attribut @cert pour indiquer le degré de certitude. Les valeurs autorisées sont : high, 
medium, low ou unknown. (?Est-il pertinent de mettre le degré de certitude dans la balise composer? Dans la balise persName, si on fait une récupération de tous les persName, on garde le niveau de certitude.)
</p>


```xml
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="..." cert="low">
          <persName role="composer" cert="low" auth="..." auth.uri="http://..." codedval="...">Nom soupçonné</persName>
      </composer>
   </work>
</workList>
```

<a id="COL_ref1"></a>

### Alias ou pseudonyme du compositeur


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique un alias ou pseudonyme d’un compositeur.|COL|

 `<persName>` et `<foreName>`

Autre option : `<foreName>` et `<famName>`

<p style="text-align:justify;"> 
 Peut être utilisé pour les noms d’emprunt, les noms de plume ou les pseudonymes historiques. Il est à noter que d'autres balises peuvent couvrir des sens de nomination plus fins : famName, genName, addName, genName, nameLink, et roleName. Leur gestion est sensiblement identique à celle de `<foreName>`.
</p>


```xml
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="...">
          <persName role="composer" auth="..." auth.uri="http://..." codedval="...">Nom réel</persName>
          <persName>
            <foreName>Alias</foreName>
          </persName>  
      </composer>
   </work>
</workList>
```

<a id="CDT_ref1"></a>

### Dates de naissance et de décès du compositeur



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique les dates de naissance et de décès du compositeur.|CDT|



 `<persName>` avec les attributs @startdate et @enddate.

<p style="text-align:justify;"> 
 Peut être omis si le compositeur est référencé avec une URI externe.
</p>


```xml
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="...">
          <persName startdate="1685" enddate="1750" auth="..." auth.uri="http://..." codedval="...">Nom du compositeur</persName>
      </composer>
   </work>
</workList>
```

<a id="CNT_ref1"></a>

### Nationalité du compositeur



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique la nationalité du compositeur.|CNT|


 `<annot>` 

<p style="text-align:justify;"> 
 Peut être omis si le compositeur est référencé avec une URI externe.
</p>


```xml
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="...">
          <persName auth="..." auth.uri="http://..." codedval="...">Nom du compositeur</persName>
          <annot label="nationality">Français</annot>
      </composer>
   </work>
</workList>
```

<a id="CBL_ref1"></a>
<a id="CDL_ref1"></a>

### Lieu de naissance et de décès d'un compositeur

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique le lieu de naissance et de décès d'un compositeur.|CBL et CDL|



 `<persName>` et `<date>` avec les attributs @startdate et @enddate.

<p style="text-align:justify;"> 
 Peut être omis si le compositeur est référencé avec un URI externe. Il est conseillé d'utiliser un URI, via @auth.uri, pour préciser le lieu. Nous préconisons l'usage d'un URI GeoNames.  
</p>


```xml
<workList xml:id="...">
   <work xml:id="...">
      <composer xml:id="...">
          <persName auth="..." auth.uri="http://..." codedval="...">...</persName>
          <date stardate="...">
             <country auth="..." auth.uri="..." codedval="...">XXX</country>
          </date>
          <date enddate="...">
             <country>XXX</country>
         </date>     
      </composer>
   </work>
</workList>
```

<a id="LIB_ref1"></a>

### Nom du librettiste

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique le nom du librettiste de l'œuvre. |LIB|

 `<librettist>`

Autre option : `<persName role="librettist">`


```xml
<workList xml:id="...">
   <work xml:id="...">
      <librettist>
         <persName auth="..." auth.uri="..." codedval="..."></persName>
      </librettist>   
   </work>
</workList>
```

<a id="LAR_ref1"></a>

### Nom de l'arrangeur 

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique le nom de l'arrangeur de l'œuvre. |LAR|

 `<arranger>`

Autre option : `<persName role="arranger">`

 Suivant les guidelines MEI pour `<arranger>`, il est uniquement question du sens "classique" de la fonction - celui qui transcrit la pièce pour une nomenclature musicale différente de l'originale. Pour "orchestrateur", voir ci-dessous.


```xml
<workList xml:id="...">
   <work xml:id="...">
      <arranger>
         <persName auth="..." auth.uri="..." codedval="..."></persName>
      </arranger>   
   </work>
</workList>
```

<a id="LOR_ref1"></a>

### Nom de l'orchestrateur 


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}| Indique le nom de l'orchestrateur de l'œuvre. |LOR|



Définition :

 `<arranger role="orchestrator">`

Autre option : `<persName role="orchestrator">`

 Comme dit ci-dessus, `<arranger>` représente uniquement le sens "classique" de la fonction : la personne qui transcrit la pièce pour une nomenclature musicale différente de l'originale. Il est donc nécessaire de préciser à l'aide de @role la qualité spécifique de l'arrangeur.  Dans la mesure où "orchestrator" n'est pas présent dans les Marc Relators, nous proposons de nous appuyer sur le vocabulaire Doremus des fonctions, comprenant "arranger" ainsi que de nombreuses sous-fonctions comme "orchestrator", "creator_of_musical_harmonization" ou encore "creator_of_musical_paraphrase" (https://github.com/DOREMUS-ANR/knowledge-base/blob/master/vocabularies/function.ttl).


```xml
<workList xml:id="...">
   <work xml:id="...">
      <arranger>
         <persName role="orchestrator" auth="..." auth.uri="..." codedval="..."></persName>
      </arranger>   
   </work>
</workList>
```

<a id="TXO_ref1"></a>

##### Langue originale de la pièce

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 [3.6.6 Language Usage](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkLanguage){:target="_blank"}|Indique la langue originale de l'œuvre encodée. |TXO|



 `<langUsage>/<language>`

Autre option : -

 `<langUsage>` contient l'ensemble des langues devant être décrites dans le fichier MEI. Dans le cas d'une seule langue renseignée, ici la langue originale, il n'apparait pas nécessaire de s'encombrer d'un attribut le précisant (comme dans l'exemple ci-dessous). Pour la distinction de plusieurs langues dans le cas de traductions ou d'adaptations, voir ci-dessous. 

Il est cependant conseillé, pour des questions d'interopérabilité, d'ajouter l'identifiant ISO de la langue renseignée à l'aide des attributs @auth.uri et @uri.


```xml
<workList xml:id="...">
   <work xml:id="...">
      <langUsage>
         <language xml:id="..." auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="fra" uri="ISO 639">French</language>
     </langUsage>         
   </work>
</workList>
```

<a id="TXL_ref1"></a>

### Langue de la pièce encodée (si différente de la langue originale)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.6 Language Usage](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkLanguage){:target="_blank"}|Indique la langue de l'œuvre encodée, si différente de la langue originale (traduction, adaptation, etc). |TXL|

 `<langUsage>/<language>`

Autre option : -

 En cas de langue traduite utilisée au sein du fichier, il semble que la seule possibilité en MEI (en raison de l'absence du `<ProfilDesc>` de la TEI) est de préciser la nature des langues à l'aide d'un @type (type="original", type="translation"). C'est à ce niveau que la balise `<langUsage>` trouve véritablement son sens en permettant de lister plusieurs langues. 

En plus de l'identifiant ISO, il est conseillé de préciser un @xml:id propre à chaque langue afin de pouvoir renseigner ce même identifiant dans la partie `<music>`, dans `<verse>` ou `<syl>` à l'aide de @xml:lang - précisant ainsi la langue utilisée pour chaque entité textuelle présente dans l'édition numérique.  


```xml
<workList xml:id="...">
   <work xml:id="...">
      <langUsage>
         <language xml:id="Lat" auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="lat" uri="ISO 639-3" type="original">Latin</language>
         <language xml:id="Fr" auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="fra" uri="ISO 639-3" type="translation">French</language>
     </langUsage>          
   </work>
</workList>
```

<a id="TRN_ref1"></a>

### Traducteur du texte

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique, le cas échéant, l'identité de la personne responsable de la traduction de l'œuvre. |TRN|

 

Balise (dans le cas d'un traducteur historique, propre à l'œuvre encodée) : `<contributor>`/`<persName>`

Autre option (dans le cas d'un traducteur ad hoc, pour l'édition numérique ou l'édition moderne utilisée comme source) : `<respStmt>`/`<persName>`

 Renseigner la personne responsable de la traduction d'une œuvre dépend avant tout du statut de cette dernière. S'il s'agit d'un traducteur historique (dans le cas où la traduction est une manifestation de l'œuvre), celui-ci est renseigné comme un `<contributor>` au sein de `<workList>`. Sa fonction précise est indiquée à l'aide de @role="translator" - le terme "translator" fait partie des Marc Relators ainsi que du vocabulaire des fonctions de Doremus. L'identifiant du traducteur (@xml:id) doit être ajouté dans la définition de la langue `<language>`.


```xml
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
 Si, à l'inverse, il s'agit d'un traducteur ad hoc dont la traduction n'a qu'une valeur éditoriale, il est préférable de renseigner son identité dans `<fileDesc>`, avec l'ensemble des personnes disposant d'une responsabilité éditoriale. Le fonctionnement reste cependant le même que précédemment, dans la mesure où l'identifiant du traducteur doit à nouveau être indiqué dans la définition de la langue concernée (dans `<workList>`), via @resp. 

Il est à noter que bien localiser la place du traducteur et de renseigner son identifiant dans `<language>` pallie l'absence de différence explicite en MEI entre un texte traduit constitutif de l'œuvre (traduction historique) et un texte traduit pour les besoins de l'édition (traduction éditoriale). 


```xml
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
## c. Informations liées à l'œuvre

<a id="OPS_ref1"></a>

### Numéro d'opus

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Numéro d'opus de l'œuvre d'appartenance de l'œuvre encodée.|OPS|



 `<title type="uniform">`/`<title type="subordinate" label="opus">`

Autre option : `<identifier label="opus">`

 Nous envisageons le numéro d'opus comme un syntagme du titre de l'œuvre d'appartenance. Ainsi, nous recommandons de l'encoder à l'aide d'une balise `<title>` et du @type="subordinate", tout en précisant le @label pour plus de clarté. Toutefois, les guidelines MEI semblent privilégier `<identifier>`, utilisé comme élément enfant de `<title>`. Nous proposons cette possibilité comme une option alternative, bien que celle-ci apparaisse structurellement discutable, notamment au regard du sens particulièrement vague de l'élément `<identifier>` ("Examples include an International Standard Book/Music Number, Library of Congress Control Number, publisher’s number, a personal identification number, an entry in a bibliography or catalog, etc."). Nous conseillons a minima de bien préciser chaque fois @label="opus". 


```xml
<workList>
   <work>
      <title type="main">Prélude en do majeur</title>
      <titlePart>
         <title type="uniform">Vingt-quatre Préludes pour piano</title>
         <title type="subordinate" label="opus">28</title>
      <titlePart>
   </work>
</workList> 
```

<a id="AIN_ref1"></a>

### Effectif

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Effectif|AIN|

 
```xml
<perfMedium>
   <perfResList>
      <perfRes>...</PerfRes>
   </perfResList>
</perfMedium>
```
 
Pour être précis dans le nombre de musicien, on utilise l'attribut @count dans l'élément perfRes.


```xml
<perfMedium>
<perfResList>
<perfRes count="2">Violons</perfRes>
<perfRes count="1">Alto</perfRes>
<perfRes count="1">Violoncelle</perfRes>
</perfResList>
</perfMedium>
```

### Dans la partie <music> (il faut dire que ce genre d'usage n'est pas recommandé) 

<a id="OAC_ref1"></a>

### Numéro d'acte (<music?>)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Numéro d'acte|OAC|

 

Autre option : 
```xml
<body>
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

```

 S'il est bien question d'une précision au sein de `<music>` : "The score and parts elements are placed here and not directly within the body element because score and part characteristics may change from mdiv to mdiv. For example, the 2nd movement of a symphony may require different performing forces (and therefore different score and part layout) than the other movements. The mdiv element may be recursively nested in order to represent music which exhibits this kind of structure. For example, an opera is normally divided into acts, which are in turn divided into scenes." https://music-encoding.org/guidelines/v5/elements/mdiv.html


```

```

<a id="OSC_ref1"></a>

### Numéro de scène (<music?>)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Numéro de scène|OSC|



 

Autre option : 

```xml
<body>
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
```
 


```

```

<a id="OMV_ref1"></a>

### Numéro de mouvement (<music?>)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}| Numéro de mouvement|OMV|



 

Autre option : 
```xml
<body>
   <mdiv label="Allegro" n="1">
      <score></score>
   </mdiv>
   <mdiv label="Menuet" n="2">
      <score></score>
   </mdiv>
</body>
```
 Même commentaire que ci-dessous. Pour le numéro, nous pourrions ajouter dans les différents éléments @n.


```

```

<a id="OMD_ref1"></a>

### Désignation du mouvement ou nom du mouvement

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Désignation du mouvement ou nom du mouvement|OMD|



 

Autre option : 
```xml
<body>
   <mdiv label="Allegro">
      <score></score>
   </mdiv>
   <mdiv label="Menuet">
      <score></score>
   </mdiv>
</body> 
```
 S'il s'agit d'un seul mouvement encodé au sein du fichier MEI, alors il me semble que le renseignement est similaire à celui renseigné pour "titre de l'œuvre d'appartenance". Sil s'agit de plusieurs mouvements encodés au sein d'un même fichier MEI (peu recommandé), dans ce cas il faudrait indiquer cette information dans `<music>` à l'aide de `<mdiv>`. 


```

```

<a id="OCO_ref1"></a>

### Commanditaire

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Commanditaire|OCO|



 
```
bibliStruc/imprint/respStmt/persName
<biblStruc>
   <imprint>
      <resStmt>
         <persName role="sponsor">...</persName>
      </respStmt>
   </imprint>
</biblStruc>
```
Autre option : 



 L'identité de la personne ayant commandé la création ou la publication d’une œuvre peut être indiqué dans un élément persName avec un attribut @role adéquat. Pour remplir l'attribut @role, nous proposons de nous appuyer sur le vocabulaire Doremus des fonctions et donc de choisir "sponsor"  (https://github.com/DOREMUS-ANR/knowledge-base/blob/master/vocabularies/function.ttl).


```xml
<biblStruc>
   <imprint>
      <resStmt>
         <persName role="sponsor" auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="47837095">Franz von Walsegg</persName>
      </respStmt>
   </imprint>
</biblStruc>

```

<a id="OCL_ref1"></a>

### Collecteur de la musique



 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Collecteur de la musique|OCL|



 
```xml
<biblStruc>
   <imprint>
      <resStmt>
         <persName role="collector_of_field_material">...</persName>
      </respStmt>
   </imprint>
</biblStruc>
```
Autre option : 

 Dans le cas d'une musique de tradition orale, le collecteur de la musique peut être indiqué en ajoutant un attribut @role à l'élément persName déclinant son identité. Nous proposons de nous appuyer sur le vocabulaire Doremus des fonctions et donc de choisir "collector_of_field_material"  (https://github.com/DOREMUS-ANR/knowledge-base/blob/master/vocabularies/function.ttl).


```xml
<biblStruc>
   <imprint>
      <resStmt>
         <persName role="collector_of_field_material" auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="179852912">Manuel García Matos</persName>
      </respStmt>
   </imprint>
</biblStruc>

```

<a id="ODE_ref1"></a>

### Dédicace

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Dédicace|ODE|

 
```xml
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
Autre option : Ou si nous souhaitons ajouter plus d'informations sur la dédicace elle-même et son contexte:
```xml
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
```
 


```xml
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

<a id="ODT_ref1"></a>

### Date de composition

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5 Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory){:target="_blank"}|Date de composition de l'œuvre encodée.|ODT|



 `<creation>/<date>`

Autre option : 

 La date de composition peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise `<date>` est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".


```xml
<workList>
   <work>
      <creation>
         <date notbefore="1530-01-01" notafter="1550-01-01" cert="low">1540</date>
      </creation>
   </work>
</workList>
```

<a id="OCY_ref1"></a>

### Pays de composition de l'œuvre encodée

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 | [3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Pays dans lequel l'œuvre encodée à été composée. |OCY|

Définition :



```
 <creation>
         <date notbefore="1530" notafter="1550" cert="low">1540</date>
         <country>France</country>
      </creation>
```

Autre option : 

 


```xml
<workList>
   <work>
      <creation>
         <date notbefore="1530" notafter="1550" cert="low">1540</date>
         <country>France</country>
      </creation>
   </work>
</workList>
```

<a id="OPC_ref1"></a>

### Ville de composition

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Ville de composition|OPC|

 
```xml
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

```xml
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

## d. Éléments esthétiques

<a id="AGN_ref1"></a>

### Désignation du genre musical

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.12 Classification](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkClass){:target="_blank"}|Désignation du genre musical|AGN|

 
```xml
<classification xml :id="…">
   <termList xml:id="…">
      <term>
         <genre></genre>
      </term>
   </termList>
</classification>
```

```xml
<classification xml :id="…">
   <termList xml:id="…">
      <term label="music genre" xml:id="…">...</term>
   </termList>
</classification>
```

<a id="AST_ref1"></a>

### Désignation du style/période/typologie de l'œuvre

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.12 Classification](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkClass){:target="_blank"}|Désignation du style/période/typologie de l'œuvre|AST|

 
```xml
<classification xml :id="…">
   <termList xml:id="…">
      <term>
         <periodName>...</periodName>
         <styleName>...</styleName>
      </term>
   </termList>
</classification>  
```

```xml
<workList>
   <work>
      <creation xml:id="…">
         <periodName>Contemporary music</periodName>
         <styleName>Minimalist</styleName>
      </creation>
   </work>
</workList>   
```

<a id="AMD_ref1"></a>

### Classification du mode (Moyen âge et Renaissance)


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.3. Key, Tempo, and Meter](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkKeyTempoMeter){:target="_blank"}|Classification du mode (Moyen âge et Renaissance){:target="_blank"}|AMD|

 
```xml
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
Autre option : 

 En MEI, le mode se désigne dans `<key>`, donc dans `<work>` ou `<expression>`, avec @mode. L'information peut également se retrouver dans la définition des portées. Il y a trois vocabulaires contrôlés MEI pour les modes. Voir data.mode.


```xml
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

<a id="AMT_ref1"></a>

### Classification métrique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.3. Key, Tempo, and Meter](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkKeyTempoMeter){:target="_blank"}|Classification métrique|AMT|


 

`<meter>`

Autre option : 

 


```

```

<a id="ONB_ref1"></a>

### Note de format libre / Nota bene

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.5 Notes Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerNotesStatement){:target="_blank"}|Note de format libre / Nota bene|ONB|


 
```xml
<notesStmt>
   <annot>...</annot>
   <annot>...</annot>
</notesStmt>
```
Autre option : 

 Selon les besoins, un élément notesStmt peut se trouver dans les éléments « expression », « fileDesc », « item », « manifestation » ou « work ».


```xml
<notesStmt>
   <annot>This is the encoding of the 1st movement of K. 157 according to the Neue Mozart-Ausgabe VIII/20/1/1.</annot>
</notesStmt>

```

## e. Interprétation de l'œuvre

<a id="MGN_ref1"></a>

### Nom du groupe des interprètes

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium){:target="_blank"}|Nom du groupe des interprètes|MGN|

 
```xml
<perfMedium>
      <corpName auth="..." auth.uri="http://..." codedval="..." role="...">Nom du groupe des interprètes</corpName>
</perfMedium>
```

Autre option : 

 Je ne crois pas que cela soit nécessaire dans un header d'une édition critique.


```xml
<workList>
   <work>
      <perfMedium>
            <corpName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="157575652" role="quatuor">Quatuor Voce</corpName>
      </perfMedium>
   </work>
</workList>
```

<a id="MPN_ref1"></a>

### Nom de l'interprète

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium){:target="_blank"}|Nom de l'interprète|MPN|

 
```xml
<perfMedium>
   <perfRes>
      <persName auth="..." auth.uri="..." codedval="..." >Nom de l'interprète</persName>
      </perfRes>
</perfMedium>
```
 


```xml
<perfMedium>
   <perfRes>
      <persName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="302774677" role="violist">Guillaume Becker</persName>
      </perfRes>
</perfMedium>
```

<a id="MPS_ref1"></a>

### Interprète soupçonné (?)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium){:target="_blank"}|Interprète soupçonné (?){:target="_blank"}|MPS|

 
```xml
<perfMedium>
   <perfRes>
      <persName auth="..." auth.uri="http://..." codedval="..." role="..." cert="high, medium, low ou unknown">Nom de l'interprète</persName>
      </perfRes>
</perfMedium>
```
 Le niveau de certitude accordé à l'interprète peut être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".


```xml
<perfMedium>
   <perfRes>
      <persName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="302774677" role="violist" cert="high">Guillaume Becker</persName>
      </perfRes>
</perfMedium>
```

<a id="MRD_ref1"></a>

### Date d'exécution/représentation

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5. Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory){:target="_blank"}|Date d'exécution/représentation|MRD|


``` 
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
```
Autre option : Dans le cas d'une œuvre dont il existe différentes expressions, dans le sens du modèle FRBR, il est possible de renseigner les informations concernants les exécutions/représentations de chaque expression distinctement.
```xml
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
```
 Selon la typologie du projet, on va indiquer les informations concernant la représentation dans WorkList ou dans expressionList.
La date de composition peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise `<date>` est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".


```xml
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

<a id="MLC_ref1"></a>

### Lieu d'exécution/représentation

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5. Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory){:target="_blank"}|Lieu d'exécution/représentation|MLC|

 
```xml
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
```
Autre option : Si nous possédons l'adresse exacte du lieu d'exécution/représentation, nous pouvons utiliser, à la place de l'élément geogName, l'élément adress.
```xml
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
```

 


```xml
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

<a id="MCN_ref1"></a>

### Nom du responsable de l'exécution/représentation (chef d'orchestre)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium){:target="_blank"}|Nom du responsable de l'exécution/représentation (chef d'orchestre){:target="_blank"}|MCN|

   
```xml
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
```
 


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

<a id="MPD_ref1"></a>

### Date de la première exécution/représentation

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5. Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory){:target="_blank"}|Date de la première exécution/représentation|MPD|

 
```xml
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
```
Autre option : 

 La date de la première exécution d'une œuvre est à situé, a minima, au niveau de workList, dans une balise `<event>` dont l'attribut @type prend pour valeur « premiere ». 
La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise `<date>` est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".


```xml
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

<a id="GAW_ref1"></a>

### Œuvre associée (ex. Stéphane Mallarmé, L’Après-midi d’un faune)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.5.1 FRBR Entities in MEI](https://music-encoding.org/guidelines/v5/content/metadata.html#FRBRentities){:target="_blank"}|Œuvre associée (ex. Stéphane Mallarmé, L’Après-midi d’un faune){:target="_blank"}|GAW|

 
```xml
<work>
   <expressionList>
      <expression>
         <title>...</title>
         ...
      </expression>
   </expressionList>
</work>
```
 
Les œuvres associées sont, au sens du modèle FRBR, des expressions différentes d'une œuvre. S'il est besoin de renseigner les informations concernant les autres expressions d'une œuvre, ces renseignements se situeront dans un élément expression dédié à chaque œuvre associée.


```xml
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

<a id="A-GCO_ref1"></a>

#### Désignation de la collection

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.4 Series Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerSeriesStatement){:target="_blank"}|Désignation de la collection|ACO & GCO|

 

Autre option : 

 La collection concerne les manifestations dans le modèles FRBR. C'est une manifestation précise qui fait partie d'une "collection". Cela peut aussi être l'item ou la source.
```xml
<sourceDesc>
<source>
<series>

```

```

```

<a id="GTL_ref1"></a>

### Titre de la collection


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.4 Series Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerSeriesStatement){:target="_blank"}|Titre de la collection|GTL|

 
```xml
<sourceDesc>
<source>
<series>
<title>
```




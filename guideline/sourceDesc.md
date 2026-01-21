---
title: Description de la source  &lt;SourceDesc&gt;
layout: default
nav_order: 7
parent: Guideline
permalink: guideline/sourceDesc

---

# Description de la source &lt;SourceDesc&gt;
## a. Titre

<a id="OTL_ref4"></a>

### Titre de la source utilisée pour l'édition digitale


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |Titre de la source.|[3.4.1.6 Source Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerSourceDescription){:target="_blank"}|OTL|

Balise :`<title>`

Autre option : -

<p style="text-align:justify;"> 
Recommandations : Cette manière minimale de renseigner le titre convient surtout aux titres officiels et consensuels des œuvres - des titres qui ne font pas l'objet d'ambiguité. Pour le renseignement de titres alternatifs ou populaires, voir plus bas.
</p>

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

<a id="PTL_ref1"></a>

### Titre de publication


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre de publication|PTL|


Balise : 
```xml
<sourceDesc>
   <source>
      <bibl>
         <title type="main"> Il nono libro de madrigali</title>
         <title type="subordinate">a cinque voci (1599)</title>  
      </bibl>
   </source>
   ```

Exemple :
```xml
<sourceDesc>
   <source>
      <bibl>
         <title type="main"> Il nono libro de madrigali</title>
         <title type="subordinate">a cinque voci (1599)</title>  
      </bibl>
   </source>
```

<a id="SMS_ref1"></a>

### Titre du manuscrit

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre du manuscrit|SMS|


Balise : 
```xml
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

Autre option : 

```xml
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

## b. Compositeur

<a id="COM_ref3"></a>

### Compositeur de la source utilisée pour l'édition digitale

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique le nom du compositeur de l'œuvre.|COM|

Balise : `<composer>`

Autre option : `<persName role="creator">`

<p style="text-align:justify;"> 
Recommandations : Le ou les compositeurs renseignés ici ne concernent que l'œuvre encodée dans le fichier MEI et non une œuvre tierce. À noter également que la valeur de rôle est libre. Toutefois, il est conseillé de suivre un thesaurus ou un vocabulaire contrôlé dans un souci de standardisation tels que [VIAF](https://www.oclc.org/fr/viaf.html) Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées (ici aussi, préciser). 
</p>

Exemple :

```xml
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
## c. Informations liées à l'édition 

<a id="PED_ref1"></a>

### Éditeur de la source utilisée pour l'édition digitale

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Éditeur de la source utilisée pour l'édition digitale|PED|

Balise : Si c'est une personne :

```xml
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

```xml
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
```xml
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

<a id="PPR_ref1"></a>

### Premier éditeur

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Premier éditeur|PPR|

Balise : 
```xml
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
Autre option : Même logique s'il s'agit de la maison d'édition en utilisant `<imprint>`. Des dates peuvent également être ajoutées pour `<editor>` pour plus de précisions.

Recommandations : 

Exemple :
```xml
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

<a id="PDT_ref1"></a>

### Date de la première publication

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Date de la première publication|PDT|

Balise : 
```xml
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
Autre option : 

<p style="text-align:justify;"> 
Recommandations : La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise `<date>` est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".
</p>

Exemple :
```xml
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

<a id="PPP_ref1"></a>

### Lieu de publication

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Lieu de publication|PPP|

Balise : 
```xml
<sourceDesc>
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
   ```
Exemple :
```xml
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

<a id="PC_ref1"></a>

##### Numéro de catalogue de l'éditeur (ex. cotage)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Numéro de catalogue de l'éditeur (ex. cotage){:target="_blank"}|PC#|

Balise : 

Autre option : 

Recommandations : 

Exemple :
```

```

<a id="SCA-T_ref1"></a>

### Numéro de catalogue scientifique [ex. BWV 551 ou Koechel 117]

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Numéro de catalogue scientifique (abr.) [ex. BWV 551]|SCT et SCA|

Balise : 
```xml
<work>
   <identifier auth.uri="http://...">
      ...
   </identifier>
</work>
```

Autre option : 

<p style="text-align:justify;"> 
Recommandations : Dans des projets comme "Bach Digital" ou "MoVi - The digital Mozart score Viewer", les numéro de catalogue sont indiqué dans une balise identifier avant un attribut label ou auth. Afin de pouvoir identifier automùatiquement que la balise identifier contient un numéro de catalogue scientifique, il faut un attribut @type dont la valeur indique catalogue scientifique.
</p>

Exemple :
```xml
<work>
   <identifier auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="188308384">
      157
   </identifier>
</work>
```

<a id="ONM_ref1"></a>

### Numéro

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Numéro|ONM|

Balise : 

Autre option : 

Recommandations : 

Exemple :
```
```

<a id="OVM_ref1"></a>

### Volume

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Volume|OVM|

Balise :
```xml
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
Autre option : 

<p style="text-align:justify;"> 
Recommandations : J'imagine que cela concerne essentiellement des données bibliographiques. J'emprunte cette manière à la TEI. La même est possible pour le numéro. 
</p>

Exemple :
```xml
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

<a id="PUB_ref1"></a>

### Publication

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|État de publication (ex. publié, pas encore publié, en cours de publication){:target="_blank"}|PUB|

Balise : 

```xml
<sourceDesc>
   <source>
      <bibl>
         <unpub>En raison d'un manque de financement</unpub>
      </bibl>
   </source>
```
Autre option : 

<p style="text-align:justify;"> 
Recommandations : En MEI, l'approche est à l'évidence très binaire : publié ou non. Nul besoin de le préciser si l'entité est bel et bien publiée (assez logique), mais par contre `<unpub>` est assez limité. Seul du texte est possible, expliquant les raisons de la non-publication. `<unpub>` peut d'ailleurs aussi aller dans `<imprint>` pour plus de précision sur le contexte de la non-publication (si celle-ci dépend de la maison d'édition).
</p>

Exemple :
```xml
<sourceDesc>
   <source>
      <bibl>
         <unpub>En raison d'un manque de financement</unpub>
      </bibl>
   </source>
```

Recommandations : 

Exemple :
```xml
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

<a id="SML_ref1"></a>

### Lieu de conservation du manuscrit

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Lieu de conservation du manuscrit|SML|

Balise :
```xml
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
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
       </bibl>
     </relatedItem>
  </bibl>
</source>
```

Autre option : 
```xml
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
```

Recommandations : 

Exemple :
```xml
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

<a id="SMA_ref1"></a>

### Informations sur l'accès au manuscrit

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Info sur l'accès au manuscrit|SMA|

Balise :
```xml
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
          <ref target="https://gallica.bnf.fr/ark:/12148/btv1b8454675g"/>
          <availability>
             <accessRestrict>Non consultable en bibliothèque</accessRestrict>
          </availability>
       </bibl>
     </relatedItem>     
  </bibl>
</source>
```

Autre option : 
```xml
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
Recommandations : 

Exemple :
```xml
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

<a id="YOR_ref1"></a>

### Document d'origine de l'édition électronique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.6 Source Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerSourceDescription){:target="_blank"}|Document d'origine de l'édition électronique|YOR|

Balise : 
```xml
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
```
Autre option : 
```xml
 <sourceDesc>
        <source>
          <bibl>
          ... Sans structure
          </bibl>
        </source>
      </sourceDesc>
```

<p style="text-align:justify;"> 
Recommandations : 
Nous recommandons d'utiliser une solution plus structuré avec `<biblStruct>\<monogr>\<imprint>` contenant toutes les informations en lien avec la source.
</p>

Exemple :


<a id="YOO_ref1"></a>

### Propriétaire du document d'origine

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Propriétaire du document d'origine|YOO|

Balise : 

!!! Il faut trouver un role adéquat
```xml
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
```

Autre option : 
```xml
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
```

<p style="text-align:justify;"> 
Recommandations : recommandation d'utiliser bilblStruct qui est plus cadré, mais la question peut se poser. Dans le cas de multiples sources et de différentes natures, bibl est plus libre. À voir.
</p>

Exemple :


<a id="YOY_ref1"></a>

### Année du copyright du document d'origine

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Année du copyright originale|YOY|


Balise : 
```xml
<manifestationList>
   <manifestation>
      <availability>
         <useRestrict>
            <date isodate="...">...</date>
         </useRestrict>
      </availability>
   </manifestation>
</manifestationList>
```
Exemple :
```xml
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

<a id="YOE_ref1"></a>

### Éditeur du document d'origine

|Chapitre des Guidelines | Définition | Clé HUMDRUM |
| :--------------- |:---------------:| -----:|
|[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Éditeur du document d'origine|YOE|

Balise : 
```xml
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
```

Exemple :
```xml
<fileDesc>
   <sourceDesc>
      <bibl>
         <imprint>
            <editor>
               <corpName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="268466075">A. Durand &amp; Fils, Éditeurs</corpName>
            </editor>
         </imprint>
      </bibl>
   </sourceDesc>
</fileDesc>
```


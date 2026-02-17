---
title: Description de la source  &lt;SourceDesc&gt;
layout: default
nav_order: 6
parent: Guideline
permalink: guideline/sourceDesc

---

<a id="YOR_ref1"></a>

# Description de la source &lt;SourceDesc&gt;

<p style="text-align:justify;"> 
   L'élément &lt;sourceDesc&gt; contient toutes les informations qui concernent la ou les sources à l'origine de l'édition électronique que représente le fichier MEI. Dans le cas où il y aurait plusieurs sources différentes, il conviendra de séparer chaque source dans un élément &lt;source&gt; différent.
   La MEI permet deux méthodes pour la description des sources. L’une d’elles, fondée sur l’usage de la balise &lt;bibl&gt;, présente une grande souplesse de structuration. Si cette flexibilité peut être considérée comme un atout, elle complique toutefois la mise en œuvre d’une méthodologie visant l’interopérabilité des corpus. Nous privilégions dès lors l’élément &lt;biblStruct&gt;, dont le cadre plus strict favorise la normalisation des données.
</p>

Structure d'une source.
```xml
<source xml:id="">
   <biblStruct xml:id="">
      <monogr>
         <title level="" type="">
         <imprint>
            
         </imprint>
      </mongr>
   </biblStruct>
</source>
```

## a. Titre

<a id="PTL_ref1"></a>

### Titre d'une source utilisée pour l'édition digitale (publication, manuscrit, etc.) 


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre de publication|OTL, PTL & SMS|

 <p style="text-align:justify;"> 
   Le titre sous lequel le document source est présenté se renseigne sous la balise &lt;title&gt; de l'élément &lt;monogr&gt;. 
   Il convient de faire bon usage des deux attributs principaux de la balise &lt;title&gt;, <strong>@level</strong> et <strong>@type</strong>.
   
   <strong>@level</strong> permet d'indiquer le niveau bibliographique du titre en prenant pour valeur :
</p>
   
   "**m**" dans le cas d'une monographie, 


   "**u**" pour une ressource inédite, 


   "**a**" pour une partie d'un objet bibliographique plus large, comme une pièce dans un recueil.


   "**c**" pour une collection n'ayant pas, à l'origine, été publié, produit ou distribué ensemble comme un fonds d'archives ou un recueil factice.

 <p style="text-align:justify;"> 
   Pour l'ensemble des valeurs que peut prendre l'attribut @level, nous vous invitons à étudier la [déclaration de la balise &lt;title&gt; sur music-encoding.org](https://music-encoding.org/guidelines/v5/elements/title.html)
</p>
   
<p style="text-align:justify;"> 
   <strong>@type</strong> permet de caractériser le titre selon :
</p>

   "**main**" pour le titre principale.


   "**subordinate**" pour un sous-titre ou le titre d'une partie.


   "**abbreviated**" pour la forme abrégée d'un titre.


   "**alternative**" pour un titre alternatif.


   "**translated**"  pour une version traduite du titre.


   "**uniform**" pour un titre conventionnels ou normalisés.


   "**desc**" pour un titre descriptif.


Exemple d'une monographie.
```xml
<source>
   <biblStruct>
      <monogr>
         <title level="m" type="main">Il nono libro de madrigali</title>
         <title type="subordinate">a cinque voci</title> 
      </monogr> 
   </biblStruct>
</source>
```

Exemple d'une lettre inédite.
```xml
<source>
   <biblStruct>
      <monogr>
         <title level="u" type="desc">Lettre daté du ...</title>
         <imprint>
            <unpub/>
         </imprint>
      </monogr> 
   </biblStruct>
</source>
```


```xml
<source recordtype="d">
  <biblStruct>
       <repository>
          <corpName>bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     <relatedItem>
       <biblStruct>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
       </biblStruct>
     </relatedItem>
  </biblStruct>
</source>
``` 

## b. Compositeur

<a id="COM_ref3"></a>

### Compositeur de la source utilisée pour l'édition digitale

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique le nom du compositeur de l'œuvre.|COM|

<p style="text-align:justify;"> 
 Le ou les compositeurs renseignés ici ne concernent que la source concernée et non une œuvre tierce. À noter également que la valeur de @role est libre, mais dans un souci d'homogéneité, nous conseillons de lui attribuer la valeur "composer".
</p>

<p style="text-align:justify;">
Dans certains cas, il apparaît important d'insister sur la provenance de l'attribution d'un compositeur. Nous vous préconisons de renseigner cette information dans la balise &lt;persName&gt; à l'aide de l'attribut @evidence. Cet attribut peut recevoir les valeurs suivantes :
</p>


<strong>"internal"</strong> quand cette attribution provient d'une information interne à la source de votre édition.


<strong>"external"</strong> quand cette attribution provient d'une information externe à la source de votre édition.


<strong>"conjecture"</strong> quand cette attribution provient d'un éditeur ou d'un chercheur sur la base de son expertise.


<p style="text-align:justify;">
Par ailleurs, le niveau de certitude accordé à cette attribution peut également être précisé à l'aide de l'attribut @cert dont les valeurs vont de "high", pour le plus grand degré de confiance, à "medium", puis "low" pour le niveau de certitude le plus faible. Il est également possible d'indiquer "unknown" quand cette évaluation est impossible.
</p>

```xml
<source xml:id="...">
   <biblStruct xml:id="...">
      <composer xml:id="...">
         <persName role="composer" auth="..." auth.uri="http://..." codedval="...">...</persName>
      </composer>
   </biblStruct>
</source>
```
<p style="text-align:justify;">
Il est possible que la source indique de manière erroné un compositeur. Nous proposons de l'indiquer avec l'emploi de l'attribut @cert="low" ; pour montrer le faible crédit que nous portons à cette information, @evidence="internal" ; pour préciser que cette attribution provient directement de la source, et l'attribut @resp renvoyant vers l'éditeur ou l'auteur de la source.
</p>

```xml
<source xml:id="...">
   <biblStruct xml:id="...">
      <composer xml:id="...">
         <monogr>
            <composer>
               <persName role="composer" auth="..." auth.uri="http://..." codedval="..." cert="low" evidence="internal" resp="#XYZ123">Nom erroné de la source</persName>
               <persName role="composer" auth="..." auth.uri="http://..." codedval="..." cert="high" evidence="external">Nom certifié par une preuve extérieur</persName>
            </composer>
            <editor>
               <persName xml:id="XYZ123" role="editor" auth="..." auth.uri="http://..." codedval="...">
            </editor>
         </monogr>
      </composer>
   </biblStruct>
</source>
```

## c. Informations liées à l'édition 

<a id="PED_ref1"></a>

### Éditeur de la source utilisée pour l'édition digitale

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Éditeur de la source utilisée pour l'édition digitale|PED|

<p style="text-align:justify;">
L'éditeur d'une source publiée peut être une personne ou une structure, comme une maison d'édition. Cette information s'inscrit soit par une balise &lt;persName&gt; pour le premier cas et &lt;corpName&gt; pour le second. Quoiqu'il en soit, cette information se situe au niveau de l'élément &lt;imprint&gt;.  
</p>

```xml
<source>
   <biblStruct>
      <monogr>
         <imprint>
            <editor>
               <persName xml:id="..." auth="VIAF" auth.uri="https://viaf.org/viaf/" codedval="12395760">Paolo Fabri</persName>
            </editor>
         </imprint>
      </monogr>
   </biblStruct>
</source>
```

```xml
<source>
   <biblStruct>
      <monogr>
         <imprint>
            <editor>
            <corpName role="editor">Edizioni Suvini Zerboni</corpName>
            <date isodate="2000">2000</date>
            <settlement auth="GeoNames" auth.uri="https://www.geonames.org/" codedval="3173435">Milano</settlement>
            </editor>
         </imprint>
      </monogr>
   </biblStruct>
</source>
```

<a id="PUB_ref1"></a>

### État de publication d'une source

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|État de publication (ex. publié, pas encore publié, en cours de publication){:target="_blank"}|PUB|



<p style="text-align:justify;">
La balise &lt;imprint&gt; contient toutes les informations lié à la publication de la source. Dans le cas d'une source non publié, il est d'usage d'y entrer un élément &lt;unpub&gt;. 
Cette balise, limité à du texte, permet de rédiger, s'il est besoin, une explication sur les raisons de la non-publication de la source. Dans le cas contraire, il est possible de laisser cette balise &lt;unpub&gt; vide, comme balise auto-fermante. (&lt;unpub/&gt;)
</p>

Exemple d'une source dont le projet de publication avorta.
```xml
<source>
   <biblStruct>
      <monogr>
         <title level="u" type="main">Titre de la source non publié</title>
         <imprint>
            <editor>
               <corpName>Nom de la maison d'édition</corpName>
               </editor>
            <unpub>En raison d'un manque de financement</unpub>
         </imprint>
      </monogr>
   </biblStruct>
</source>
```

Exemple, avec balise auto-fermante, d'une lettre qui, par essence, n'avait pas vocation à être publiée.
```xml
<source>
   <biblStruct>
      <monogr>
         <title level="u" type="desc">Lettre daté du ...</title>
         <imprint>
            <unpub/>
         </imprint>
      </monogr> 
   </biblStruct>
</source>
```

```xml
<source recordtype="d">
  <biblStruct>
     <physLoc>
       <repository>
          <corpName>bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <biblStruct>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
       </biblStruct>
     </relatedItem>
  </biblStruct>
</source>
```

<a id="PPP_ref1"></a>

### Lieu de publication

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Lieu de publication|PPP|

 
```xml
<source recordtype="c">
   <biblStruct>
      <monogr>
         <imprint>
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
      </monogr>
   </biblStruct>
</source>
```

```xml
<source recordtype="c">
   <biblStruct>
      <monogr>
         <imprint>
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
      </monogr>
   </biblStruct>
</source>
```

<a id="SCA_ref1"></a>

### Numéro de catalogue scientifique [ex. BWV 551 ou Koechel 117] ou de l'éditeur (ex. cotage)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Numéro de catalogue scientifique (abr.) [ex. BWV 551]|PC#, SCT et SCA|

<p style="text-align:justify;"> 
 Dans des projets comme "Bach Digital" ou "MoVi - The digital Mozart score Viewer", les numéro de catalogue sont indiqué dans une balise identifier avant un attribut label ou auth. Afin de pouvoir identifier automatiquement que la balise identifier contient un numéro de catalogue scientifique, il faut un attribut @type dont la valeur indique catalogue scientifique.
</p>
 
```xml
<source>
   <biblStruct>
      <identifier auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="188308384">
         157
      </identifier>
   </biblStruct>
</source>
```


<a id="ONM_ref1"></a>

### Numéro

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Numéro|ONM|


```
```

<a id="OVM_ref1"></a>

### Volume

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Volume|OVM|


```xml
 <source>
  <biblStruct>
      <composer>
          <persName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="...">XXX</persName>
      </composer>
      <title type="main">XXX</title>
      <editor>
          <persName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="..."></persName>
      </editor>
      <biblStructScope label="volume">1</biblStructScope>
   </biblStruct>
</source>
```

Autre option : 

<p style="text-align:justify;"> 
 J'imagine que cela concerne essentiellement des données bibliographiques. J'emprunte cette manière à la TEI. La même est possible pour le numéro. 
</p>


```xml
<source>
  <biblStruct>
      <composer>
          <persName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="...">XXX</persName>
      </composer>
      <title type="main">XXX</title>
      <editor>
          <persName auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="..."></persName>
      </editor>
      <biblStructScope label="volume">1</biblStructScope>
   </biblStruct>
</source>
```



<a id="SML_ref1"></a>

### Lieu de conservation du manuscrit

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Lieu de conservation du manuscrit|SML|


```xml
 <source recordtype="d">
  <biblStruct>
     <physLoc>
       <repository>
          <corpName>bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <biblStruct>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
       </biblStruct>
     </relatedItem>
  </biblStruct>
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
               <corpName>bibliothèque nationale de France</corpName>
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


```xml
<source recordtype="d">
  <biblStruct>
     <physLoc>
       <repository>
          <corpName>bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <biblStruct>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
       </biblStruct>
     </relatedItem>
  </biblStruct>
</source>
```

<a id="SMA_ref1"></a>

### Informations sur l'accès au manuscrit

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Info sur l'accès au manuscrit|SMA|


```xml
 <source recordtype="d">
  <biblStruct>
     <physLoc>
       <repository>
          <corpName>bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <biblStruct>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval="cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
          <ref target="https://gallica.bnf.fr/ark:/12148/btv1b8454675g"/>
          <availability>
             <accessRestrict>Non consultable en bibliothèque</accessRestrict>
          </availability>
       </biblStruct>
     </relatedItem>     
  </biblStruct>
</source>
```

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
               <corpName>bibliothèque nationale de France</corpName>
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

```xml
<source recordtype="d">
  <biblStruct>
     <physLoc>
       <repository>
          <corpName>bibliothèque nationale de France</corpName>
          <abbr>BnF</abbr>
       </repository>
     </physLoc>
     <relatedItem>
       <biblStruct>
          <identifier auth="BnF" auth.uri="https://archivesetmanuscrits.bnf.fr/ark:/12148/" codedval"cc45158c">Français 146</identifier>
          <abbr>Fr. 146</abbr>
          <title type="alternative">Roman de Fauvel</title>
          <locus label="folio" from="1r" to="2r">ff. 1r-2r</locus>
          <ref target="https://gallica.bnf.fr/ark:/12148/btv1b8454675g"/>
          <availability>
             <accessRestrict>Non consultable en bibliothèque</accessRestrict>
          </availability>
       </biblStruct>
     </relatedItem>     
  </biblStruct>
</source>
```

<a id="YOO_ref1"></a>

### Propriétaire du document d'origine

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Propriétaire du document d'origine|YOO|

 

!!! Il faut trouver un role adéquat
```xml
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
```

Autre option : 
```xml
<source>
   <biblStruct>
      <availability>
         <useRestrict>
            <persName role="owner ou qqchose comme ça"></persName>
         </useRestrict>
      </availability>
   </biblStruct>
</source>
```

<p style="text-align:justify;"> 
 recommandation d'utiliser bilblStruct qui est plus cadré, mais la question peut se poser. Dans le cas de multiples sources et de différentes natures, biblStruct est plus libre. À voir.
</p>


<a id="YOY_ref1"></a>

### Année du copyright du document d'origine

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Année du copyright originale|YOY|


 
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

<a id="PPR_ref1"></a>

### Date et éditeur de la première publication

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Premier éditeur|PPR|

 <!-- Est-ce bien nécessaire dans le cadre de la description d'une source? Ou seulement dans la partie plus FRBR que représente WorkList ?  -->
```xml
<source>
   <biblStruct>
      <monogr>
         <imprint>
      <editor xml:id="E1" n="1" precedes="#E2">
         <persName></persName>
      </editor>
      <editor xml:id="E2" n="2" follows="#E1">
         <persName></persName>
      </editor>     
      </imprint>
      </monogr>
   </biblStruct>
</source>
```

Autre option : Même logique s'il s'agit de la maison d'édition en utilisant `<imprint>`. Des dates peuvent également être ajoutées pour `<editor>` pour plus de précisions.

 
```xml
<source>
   <biblStruct>
      <monogr>
         <imprint>
      <editor xml:id="E1" n="1" precedes="#E2">
         <persName></persName>
      </editor>
      <editor xml:id="E2" n="2" follows="#E1">
         <persName></persName>
      </editor>  
      </imprint>  
      </monogr> 
   </biblStruct>
</source>
```

```xml
<source>
   <biblStruct>
      <monogr>
         <imprint>
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
      </imprint>
      </monogr>  
   </biblStruct>
</source>
```


Autre option : 

<p style="text-align:justify;"> 
 La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise `<date>` est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".
</p>


```xml
<source>
   <biblStruct>
      <monogr>
         <imprint>
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
      </imprint>
      </monogr>   
   </biblStruct>
</source>
```


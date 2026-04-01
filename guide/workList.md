---
title: Description de l'œuvre &lt;work&gt;
layout: default
nav_order: 7
parent: Guideline
permalink: /guide/work
---

# Description de l'œuvre éditée 

<p style="text-align:justify;">

L'élément &lt;workList&gt; est à la racine de toute la description de l'œuvre éditée par le fichier MEI. Il contient l'élément &lt;work&gt; qui contient les éléments de l'œuvre.
Par conséquent, tous les exemples de ce chapitre prendront comme racine la balise &lt;work&gt;.
</p>

<a id="OTL_ref3"></a>


## Titre de l'œuvre

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre de l'œuvre| OTL & OTA|

   Le titre de l'œuvre se présente sous la balise &lt;title&gt;. 
 <p style="text-align:justify;">
   Il convient de faire bon usage des deux attributs principaux de la balise &lt;title&gt;, <strong>@level</strong> et <strong>@type</strong>.
   
   <strong>@level</strong> permet d'indiquer le niveau bibliographique du titre en prenant pour valeur :
</p>
   
   "**m**" dans le cas d'une monographie,


   "**u**" pour une ressource inédite,


   "**a**" pour une partie d'un objet bibliographique plus large, comme une pièce dans un recueil,


   "**c**" pour une collection n'ayant pas, à l'origine, été publiée, produite ou distribuée en tant que telle. Cela peut représenter, par exemple, un fonds d'archives ou un recueil factice.

 <p style="text-align:justify;"> 
   (Pour l'ensemble des valeurs que peut prendre l'attribut @level, nous vous invitons à étudier la [déclaration de la balise &lt;title&gt; sur music-encoding.org](https://music-encoding.org/guidelines/v5/elements/title.html))
</p>
   
<p style="text-align:justify;"> 
   <strong>@type</strong> permet, quant à lui, de caractériser le titre selon :
</p>

   "**main**" pour le titre principale,


   "**subordinate**" pour un sous-titre ou le titre d'une partie,


   "**abbreviated**" pour la forme abrégée d'un titre,


   "**alternative**" pour un titre alternatif,


   "**translated**"  pour une version traduite du titre,


   "**uniform**" pour un titre conventionnels ou normalisés,


   "**desc**" pour un titre descriptif.



```xml
<work>
   <title>...</title>
</work>
```

<p style="text-align:justify;"> 
 Dans le cas de sections ou de mouvements d'une œuvre, il est nécessaire de faire une distinction entre le titre de la partie encodée et l'œuvre globale. Pour cela, il est nécessaire d'utiliser l'attribut @type et la valeur "uniform". De même, afin de mieux catégoriser les différents niveaux de titres, il est conseillé d'employer &lt;titlePart&gt;. La valeur "subordinate" peut être pratique pour hiérarchiser les divers syntagmes d'un même niveau de titre, comme le mouvement ou numéro d'opus.
</p>

<a id="OTP_ref1"></a>
<a id="OTA_ref1"></a>

### Titre courant et titre alternatif de l'œuvre

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Autre titre de l'œuvre encodée, distinct du titre principal.|OTA & OTP|


<p style="text-align:justify;"> 
 Comme dit plus haut, l'attribut "alternative" demeure le plus simple pour renseigner un titre différent du titre officiel de l'œuvre encodée. Toutefois, l'attribut @type dispose d'autres valeurs contrôlées, listées précédemment, qui peuvent affiner la nature du titre renseigné. Ainsi, dans l'exemple ci-dessous, apparaissent deux niveaux de titres (titre du mouvement encodé et titre de l'œuvre globale) ainsi que leurs diverses formes potentielles.

</p>
 Le titre courant peut facilement se confondre avec le titre alternatif. Sur ce point, seuls les usages peuvent apporter des réponses. Dans le doute, il est préférable de privilégier le titre alternatif, moins restrictif que le sens sous-entendu par titre « courant ». Par ailleurs, parmi les valeurs contrôlées de l'attribut @type ("main", "subordinate", "abbreviated", "alternative", "translated", "uniform" et "desc"), aucune ne couvre l'acception d'un titre « populaire ».


```xml
<work>
   <title type="main">Rondo alla Turca</title>
   <title type="subordinate" label="movement">Allegretto</title>
   <title type="abbreviated">Alla Turca</title>
   <title type="alternative">Marche Turque</title>
   <title>
      <titlePart>
         <title type="uniform">Sonate pour piano no. 11 en la majeur</title>
         <title type="subordinate" label="Köchel">K. 331/300</title>
         <title type="translated" xml:lang="DE">Sonate Nr. 11 A-Dur</title>
         <title type="desc">Sonate pour piano très connue de Mozart</title>
      </titlePart>
   </title>
</work>
```

### Titre d'un mouvement d'une œuvre 

```xml
<work>
      <title type="main">Rondo alla Turca</title>
      <title type="subordinate" label="movement">Allegretto</title>
      <titlePart>
         <title type="uniform">Sonate pour piano no. 11 en la majeur</title>
         <title type="subordinate" label="Köchel">K. 331/300</title>
      </titlePart>
</work>
```

<p style="text-align:justify;"> 
 Il est à noter que le renseignement du titre, métadonnée de première importance, est paradoxalement négligé dans les guidelines MEI. Divers exemples suggèrent une distinction minimale des niveaux de titres et une certaine liberté dans leur troncation. La raison réside certainement dans l'ambiguïté qui dérive des différentes formes de titres et de leurs usages multiples. Bien que @type soit régi par les valeurs contrôlées listées ci-dessus, les guidelines illustrent à l'occasion l'usage non conventionnel de @type="subtitle" pour encoder un syntagme subordonné au titre principal. Nous nous limiterons ici aux seuls vocables contrôlés précisés précédemment.
</p>


<a id="OPR_ref1"></a>

### Titre de l'œuvre d'appartenance

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Titre de l'œuvre globale dans le cas d'une section ou d'un mouvement.|OPR|

<p style="text-align:justify;"> 
 Comme dit précédemment, si diverses formes de titre sont retenues dans l'édition, il est conseillé de structurer les différents niveaux à l'aide de &lt;titlePart&gt;, surtout si des valeurs semblables pour @type sont utilisées à la fois pour le titre du mouvement et pour le titre de l'œuvre d'appartenance. Dans l'exemple ci-dessous, la description minimale ne nécessite pas une telle distinction.  
</p>


```xml
<manifestation>
<titleStmt>
   <title type="main">Rondo alla Turca</title>
   <title type="abbreviated">Alla Turca</title>
   <title type="alternative">Marche Turque</title>
   <title type="uniform">Sonate pour piano no. 11 en la majeur</title>
   </titleStmt>
</manifestation>
```

<a id="COS_ref1"></a>
<a id="COL_ref1"></a>

## Compositeur de l'œuvre

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique le nom du compositeur de l'œuvre.|COM, COA, COS & COL|


<p style="text-align:justify;">
Le ou les compositeurs renseignés ici ne concernent que l'œuvre encodée dans le fichier MEI et non une œuvre tierce. À noter également que la valeur de rôle est libre, mais dans un souci d'homogéneité, nous conseillons de lui attribuer la valeur "composer". Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées. (pour plus d'information sur la gestion des URI d'autorité, voir [le chapitre sur l'autorité](guide/thesauri.html)).
</p>

```xml
<work>
   <composer xml:id="...">
      <persName role="composer" auth="..." auth.uri="http://..." codedval="...">...</persName>
   </composer>
</work>
```

<p style="text-align:justify;">
C'est dans l'élément &lt;work&gt; qu'il convient d'indiquer tous les renseignements qu'on juge utile de noter sur l'identité du compositeur. À cet effet, la MEI nous propose différentes balises pour indiquer les noms d’emprunts, noms de plumes et pseudonymes historique. 
</p>

   **&lt;foreName&gt;** pour un prénom,


   **&lt;famName&gt;** pour un nom de famille,


   **&lt;genName&gt;** pour une composante de nom indiquant la génération, par exemple « Jr » ou « Sr »,


   **&lt;addName&gt;** pour un élément supplémentaire comme un surnom, une épithète ou un alias,


   **&lt;nameLink&gt;** pour une particule patronymique comme « de », « von » ou « van der » par exemple,


   **&lt;roleName&gt;**  pour la composante de nom indiquant un titre ou un rang comme « Sir ».


<p style="text-align:justify;">
Il convient alors de les intégrer dans l'élément &lt;persName&gt;. 
</p>

*Exemple du nom complet de Mozart*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://d-nb.info/gnd" authority="GND" codedval="118584596" role="composer">
            <famName>Mozart</famName>
            ,
            <foreName type="baptismal">Johannes</foreName>
            <foreName type="baptismal">Chrysostomus</foreName>
            <foreName type="familiar">Wolfgangus</foreName>
            <foreName type="baptismal">Theophilus</foreName>
         </persName>
   </composer>
</work>
```

<p style="text-align:justify;">
Il est possible d'indiquer l'évolution du nom du compositeur avec les attributs @startdate et @enddate.
</p>

*Exemple de l'évolution du nom de Fanny Mendelssohn durant sa vie*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://viaf.org/viaf/" authority="VIAF" codedval="2535006" role="composer">
            <famName startdate="1805-11-14" enddate="1829-10-03" type="birth">Mendelssohn</famName>
            <famName startdate="1816-03-21" enddate="1829-10-03" type="baptismal">Bartholdy</famName>
            <famName startdate="1829-10-03" enddate="1847-05-14" type="married">Hensel</famName>
            <foreName startdate="1805-11-14" enddate="1829-10-03" type="birth">Fanny</foreName>
            <foreName startdate="1805-11-14" enddate="1816-03-21" type="birth">Zippora</foreName>
            <foreName startdate="1816-03-21" enddate="1847-05-14" type="baptismal">Cäcilie</foreName>
         </persName>
   </composer>
</work>
```

<a id="CBL_ref1"></a>

### Dates et lieux de naissance et de décès du compositeur

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique les dates de naissance et de décès du compositeur.|CDT, CBL et CDL|

<p style="text-align:justify;"> 
Il est possible d'indiquer les informations concernant la naissance et le décès du compositeur dans la balise &lt;composer&gt; en ajoutant une balise &lt;date&gt; avec l'attribut @isodate et un élément de lieu.

Nous conseillons d'utiliser la norme [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) pour identifier les pays indiqués.

L'ensemble de ces informations peuvent être omises si le compositeur est [référencé avec une URI externe](guide/thesauri.html).
</p>

<!-- J'hésite entre les attributs @type et @role pour faire mention de birth and death. Ou alors on utilise @startdate et @enddate ? -->


```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName auth="..." auth.uri="http://..." codedval="...">...</persName>
         <date isodate="..." type="birth">
            <country auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">Allemagne</country>
         </date>
         <date isodate="..." type="death">
            <country auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">Allemagne</country>
      </date>     
   </composer>
</work>
```
<!-- <date type="birth" isodate="1805-11-14">Née le 14 Novembre 1085 en
            <country type="birth">Allemagne</country>.
            </date>-->


<a id="CNT_ref1"></a>

### Nationalité du compositeur

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique la nationalité du compositeur.|CNT|

<p style="text-align:justify;"> 
La MEI ne propose pas de balise spécifique à la nationalité d'une personne. Dans le cas où cette information est intéressante dans votre édition, nous vous proposons de l'indiquer via un élément &lt;country&gt; avec un attribut @type="nationality".

Nous conseillons d'utiliser la norme [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) pour identifier les pays indiqués.

Cette information peut être omise si le compositeur est référencé avec une URI externe.
</p>

<!--<annot label="nationality">français</annot> ? Est-ce mieux que country ? -->

*Exemple de l'indication de la nationalité de Beethoven*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName auth="VIAF" auth.uri="https://viaf.org/viaf/" codedval="32182557">Ludwig van Beethoven</persName>,
         <country type="nationality" auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">allemand</country>
   </composer>
</work>
```

<a id="LIB_ref1"></a>

## Nom du librettiste

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique le nom du librettiste de l'œuvre. |LIB|

<p style="text-align:justify;">
Le ou les librettistes renseignés ici ne concernent que l'œuvre encodée dans le fichier MEI et non une œuvre tierce. À noter également que la valeur de rôle est libre, mais dans un souci d'homogéneité, nous conseillons de lui attribuer la valeur "librettist". Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées. (pour plus d'information sur la gestion des URI d'autorité, voir [le chapitre sur l'autorité](guide/thesauri.html)).
</p>

```xml
<work>
   <librettist xml:id="...">
      <persName role="librettist" auth="..." auth.uri="http://..." codedval="...">...</persName>
   </librettist>
</work>
```
<p style="text-align:justify;">
C'est dans l'élément &lt;work&gt; qu'il convient d'indiquer tous les renseignements qu'on juge utile de noter sur l'identité du librettiste. À cet effet, la MEI nous propose différentes balises pour indiquer les noms d’emprunts, noms de plumes ou pseudonymes historiques. 
</p>

   **&lt;foreName&gt;** pour un prénom,


   **&lt;famName&gt;** pour un nom de famille,


   **&lt;genName&gt;** pour une composante de nom indiquant la génération, par exemple « Jr » ou « Sr »,


   **&lt;addName&gt;** pour un élément supplémentaire comme un surnom, une épithète ou un alias,


   **&lt;nameLink&gt;** pour une particule patronymique comme « de », « von » ou « van der » par exemple,


   **&lt;roleName&gt;**  pour la composante de nom indiquant un titre ou un rang comme « Sir ».


<p style="text-align:justify;">
Il convient alors de les intégrer dans l'élément &lt;persName&gt;. 
</p>

*Exemple du nom complet de Mozart*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://d-nb.info/gnd" authority="GND" codedval="118584596" role="composer">
            <famName>Mozart</famName>
            ,
            <foreName type="baptismal">Johannes</foreName>
            <foreName type="baptismal">Chrysostomus</foreName>
            <foreName type="familiar">Wolfgangus</foreName>
            <foreName type="baptismal">Theophilus</foreName>
         </persName>
   </composer>
</work>
```

<p style="text-align:justify;">
Il est possible d'indiquer l'évolution du nom du librettiste avec les attributs @startdate et @enddate. 
</p>

*Exemple de l'évolution du nom de Fanny Mendelssohn durant sa vie*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://viaf.org/viaf/" authority="VIAF" codedval="2535006" role="composer">
            <famName startdate="1805-11-14" enddate="1829-10-03" type="birth">Mendelssohn</famName>
            <famName startdate="1816-03-21" enddate="1829-10-03" type="baptismal">Bartholdy</famName>
            <famName startdate="1829-10-03" enddate="1847-05-14" type="married">Hensel</famName>
            <foreName startdate="1805-11-14" enddate="1829-10-03" type="birth">Fanny</foreName>
            <foreName startdate="1805-11-14" enddate="1816-03-21" type="birth">Zippora</foreName>
            <foreName startdate="1816-03-21" enddate="1847-05-14" type="baptismal">Cäcilie</foreName>
         </persName>
   </composer>
</work>
```

### Dates et lieux de naissance et de décès du librettiste

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique les dates de naissance et de décès du librettiste.|CDT, CBL et CDL|

<p style="text-align:justify;"> 
Il est possible d'indiquer les informations concernant la naissance et le décès du librettiste dans la balise &lt;librettist&gt; en ajoutant une balise &lt;date&gt; avec l'attribut @isodate et un élément de lieu.

Nous conseillons d'utiliser la norme [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) pour identifier les pays indiqués.

L'ensemble de ces informations peuvent être omises si le librettiste est [référencé avec une URI externe](guide/thesauri.html).
</p>

<!-- J'hésite entre les attributs @type et @role pour faire mention de birth and death. Ou alors on utilise @startdate et @enddate ? -->


```xml
<work xml:id="...">
   <librettist xml:id="...">
         <persName auth="..." auth.uri="http://..." codedval="...">...</persName>
         <date isodate="..." type="birth">
            <country auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">Allemagne</country>
         </date>
         <date isodate="..." type="death">
            <country auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">Allemagne</country>
      </date>     
   </librettist>
</work>
```
<!-- <date type="birth" isodate="1805-11-14">Née le 14 Novembre 1085 en
            <country type="birth">Allemagne</country>.
            </date>-->


### Nationalité du librettiste

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique la nationalité du librettiste.|CNT|

<p style="text-align:justify;"> 
La MEI ne propose pas de balise spécifique à la nationalité d'une personne. Dans le cas où cette information est intéressante dans votre édition, nous vous proposons de l'indiquer via un élément &lt;country&gt; avec un attribut @type="nationality".

Nous conseillons d'utiliser la norme [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) pour identifier les pays indiqués.

Cette information peut être omise si le librettiste est référencé avec une URI externe.
</p>

<!--<annot label="nationality">Français</annot> ? Est-ce mieux que country ? -->

*Exemple de la nationalié de Beethoven*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName auth="VIAF" auth.uri="https://viaf.org/viaf/" codedval="32182557">Ludwig van Beethoven</persName>,
         <country type="nationality" auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">allemand</country>
   </composer>
</work>
```

<a id="LAR_ref1"></a>

## Nom de l'arrangeur 

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique le nom de l'arrangeur de l'œuvre. |LAR|

 <p style="text-align:justify;">
Le ou les arrangeurs renseignés ici ne concernent que l'œuvre encodée dans le fichier MEI et non une œuvre tierce. La valeur de rôle est libre, mais dans un souci d'homogéneité, nous conseillons de lui attribuer la valeur "arranger". Pour finir, nous préconisons de renseigner un URI identifiant l'individu concerné sur le web afin d'améliorer l'interopérabilité des métadonnées. (pour plus d'information sur la gestion des URI d'autorité, voir [le chapitre sur l'autorité](guide/thesauri.html)).

 Selon les guidelines MEI pour &lt;arranger&gt;, il est uniquement question du sens « classique » de la fonction, celui qui transcrit la pièce pour une nomenclature musicale différente de l'originale. Pour l'orchestrateur, voir [Nom de l'orchestrateur](guide/workList.html#LOR_ref1).

 Tous les exemples de cette section reprennent les exemples concernants la section sur les compositeurs.
</p>

```xml
<work xml:id="...">
   <arranger>
      <persName role="arranger" auth="..." auth.uri="..." codedval="..."></persName>
   </arranger>   
</work>
```

<p style="text-align:justify;">
S'il est besoin, dans votre projet d'édition numérique de rentrer dans les détails de l'identité de l'arrangeur, c'est dans l'élément &lt;work&gt; qu'il convient d'indiquer tous ces renseignements. À cet effet, la MEI nous propose différentes balises pour indiquer les noms d’emprunts, noms de plumes ou pseudonymes historiques. 
</p>

   **&lt;foreName&gt;** pour un prénom,


   **&lt;famName&gt;** pour un nom de famille,


   **&lt;genName&gt;** pour une composante de nom indiquant la génération, par exemple « Jr » ou « Sr »,


   **&lt;addName&gt;** pour un élément supplémentaire comme un surnom, une épithète ou un alias,


   **&lt;nameLink&gt;** pour une particule patronymique comme « de », « von » ou « van der » par exemple,


   **&lt;roleName&gt;**  pour la composante de nom indiquant un titre ou un rang comme « Sir ».


<p style="text-align:justify;">
Il convient alors de les intégrer dans l'élément &lt;persName&gt;. 

</p>

*Exemple du nom complet de Mozart*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://d-nb.info/gnd" authority="GND" codedval="118584596" role="composer">
            <famName>Mozart</famName>
            ,
            <foreName type="baptismal">Johannes</foreName>
            <foreName type="baptismal">Chrysostomus</foreName>
            <foreName type="familiar">Wolfgangus</foreName>
            <foreName type="baptismal">Theophilus</foreName>
         </persName>
   </composer>
</work>
```

<p style="text-align:justify;">
Il est possible d'indiquer l'évolution du nom de l'arrangeur avec les attributs @startdate et @enddate. 
</p>

*Exemple de l'évolution du nom de Fanny Mendelssohn durant sa vie*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://viaf.org/viaf/" authority="VIAF" codedval="2535006" role="composer">
            <famName startdate="1805-11-14" enddate="1829-10-03" type="birth">Mendelssohn</famName>
            <famName startdate="1816-03-21" enddate="1829-10-03" type="baptismal">Bartholdy</famName>
            <famName startdate="1829-10-03" enddate="1847-05-14" type="married">Hensel</famName>
            <foreName startdate="1805-11-14" enddate="1829-10-03" type="birth">Fanny</foreName>
            <foreName startdate="1805-11-14" enddate="1816-03-21" type="birth">Zippora</foreName>
            <foreName startdate="1816-03-21" enddate="1847-05-14" type="baptismal">Cäcilie</foreName>
         </persName>
   </composer>
</work>
```


### Dates et lieux de naissance et de décès de l'arrangeur

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique les dates de naissance et de décès de l'arrangeur.|-|

<p style="text-align:justify;"> 
Il est possible d'indiquer les informations concernant la naissance et le décès de l'arrangeur dans la balise &lt;arranger&gt; en ajoutant une balise &lt;date&gt; avec l'attribut @isodate et un élément de lieu.

Nous conseillons d'utiliser la norme [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) pour identifier les pays indiqués.

L'ensemble de ces informations peuvent être omises si l'arrangeur est [référencé avec une URI externe](guide/thesauri.html).
</p>

<!-- J'hésite entre les attributs @type et @role pour faire mention de birth and death. Ou alors on utilise @startdate et @enddate ? -->

```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName auth="..." auth.uri="http://..." codedval="...">...</persName>
         <date isodate="..." type="birth">
            <country auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">Allemagne</country>
         </date>
         <date isodate="..." type="death">
            <country auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">Allemagne</country>
      </date>     
   </composer>
</work>
```
<!-- <date type="birth" isodate="1805-11-14">Née le 14 Novembre 1085 en
            <country type="birth">Allemagne</country>.
            </date>-->


### Nationalité de l'arrangeur

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique la nationalité du librettiste.|-|

<p style="text-align:justify;"> 
La MEI ne propose pas de balise spécifique à la nationalité d'une personne. Dans le cas où cette information est intéressante dans votre édition, nous vous proposons de l'indiquer via un élément &lt;country&gt; avec un attribut @type="nationality".

Nous conseillons d'utiliser la norme [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) pour identifier les pays indiqués.

Cette information peut être omise si l'arrangeur est référencé avec une URI externe.
</p>

<!-- <annot label="nationality">Français</annot> ? Est-ce mieux que country ? -->

```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName auth="VIAF" auth.uri="https://viaf.org/viaf/" codedval="32182557">Ludwig van Beethoven</persName>,
         <country type="nationality" auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">allemand</country>
   </composer>
</work>
```

<a id="LOR_ref1"></a>

## Nom de l'orchestrateur 


 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}| Indique le nom de l'orchestrateur de l'œuvre. |LOR|

<p style="text-align:justify;"> 
Selon les guidelines MEI, il n'existe pas d'élément correspondant à la fonction d'orchestrateur. La balise &lt;arranger&gt; comprend uniquement la question du sens « classique » de la fonction, celui qui transcrit la pièce pour une nomenclature musicale différente de l'originale. Pour pallier ce manque, il est nécessaire de préciser à l'aide de @role la qualité spécifique de l'orchestrateur. Dans la mesure où "orchestrator" n'est pas présent dans les Marc Relators, nous proposons de nous appuyer sur le vocabulaire DOREMUS des fonctions, comprenant "arranger" ainsi que de nombreuses sous-fonctions comme "orchestrator", "creator_of_musical_harmonization" ou encore "creator_of_musical_paraphrase" [voir le Vocabulaire DoReMus](https://github.com/DOREMUS-ANR/knowledge-base/blob/master/vocabularies/function.ttl).

 Tous les exemples de cette section reprennent les exemples concernants la section sur les compositeurs.
</p>

```xml
<work xml:id="...">
   <arranger>
      <persName role="orchestrator" auth="..." auth.uri="..." codedval="..."></persName>
   </arranger>   
</work>
```


<p style="text-align:justify;">
S'il est besoin, dans votre projet d'édition numérique de rentrer dans les détails de l'identité de l'orchestrateur, c'est dans l'élément &lt;work&gt; qu'il convient d'indiquer tous ces renseignements. À cet effet, la MEI nous propose différentes balises pour indiquer les noms d’emprunts, noms de plumes ou pseudonymes historiques. 
</p>

   **&lt;foreName&gt;** pour un prénom,


   **&lt;famName&gt;** pour un nom de famille,


   **&lt;genName&gt;** pour une composante de nom indiquant la génération, par exemple « Jr » ou « Sr »,


   **&lt;addName&gt;** pour un élément supplémentaire comme un surnom, une épithète ou un alias,


   **&lt;nameLink&gt;** pour une particule patronymique comme « de », « von » ou « van der » par exemple,


   **&lt;roleName&gt;**  pour la composante de nom indiquant un titre ou un rang comme « Sir ».


<p style="text-align:justify;">
Il convient alors de les intégrer dans l'élément &lt;persName&gt;. 
</p>

*Exemple du nom complet de Mozart*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://d-nb.info/gnd" authority="GND" codedval="118584596" role="composer">
            <famName>Mozart</famName>
            ,
            <foreName type="baptismal">Johannes</foreName>
            <foreName type="baptismal">Chrysostomus</foreName>
            <foreName type="familiar">Wolfgangus</foreName>
            <foreName type="baptismal">Theophilus</foreName>
         </persName>
   </composer>
</work>
```

<p style="text-align:justify;">
Il est possible d'indiquer l'évolution du nom de l'orchestrateur avec les attributs @startdate et @enddate. 
</p>

*Exemple de l'évolution du nom de Fanny Mendelssohn durant sa vie*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://viaf.org/viaf/" authority="VIAF" codedval="2535006" role="composer">
            <famName startdate="1805-11-14" enddate="1829-10-03" type="birth">Mendelssohn</famName>
            <famName startdate="1816-03-21" enddate="1829-10-03" type="baptismal">Bartholdy</famName>
            <famName startdate="1829-10-03" enddate="1847-05-14" type="married">Hensel</famName>
            <foreName startdate="1805-11-14" enddate="1829-10-03" type="birth">Fanny</foreName>
            <foreName startdate="1805-11-14" enddate="1816-03-21" type="birth">Zippora</foreName>
            <foreName startdate="1816-03-21" enddate="1847-05-14" type="baptismal">Cäcilie</foreName>
         </persName>
   </composer>
</work>
```

### Dates et lieux de naissance et de décès de l'orchestrateur

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique les dates de naissance et de décès de l'arrangeur.|-|

<p style="text-align:justify;"> 
Il est possible d'indiquer les informations concernant la naissance et le décès de l'orchestrateur dans la balise &lt;arranger&gt; en ajoutant une balise &lt;date&gt; avec l'attribut @isodate et un élément de lieu.

Nous conseillons d'utiliser la norme [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) pour identifier les pays indiqués.

L'ensemble de ces informations peuvent être omises si le librettiste est [référencé avec une URI externe](guide/thesauri.html).
</p>

<!-- J'hésite entre les attributs @type et @role pour faire mention de birth and death. Ou alors on utilise @startdate et @enddate ? -->

```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName auth="..." auth.uri="http://..." codedval="...">...</persName>
         <date isodate="..." type="birth">
            <country auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">Allemagne</country>
         </date>
         <date isodate="..." type="death">
            <country auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">Allemagne</country>
      </date>     
   </composer>
</work>
```
<!-- <date type="birth" isodate="1805-11-14">Née le 14 Novembre 1085 en
            <country type="birth">Allemagne</country>.
            </date>-->


### Nationalité de l'orchestrateur

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6 Work Description](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkDescription){:target="_blank"}|Indique la nationalité de l'orchestrateur.|-|

<p style="text-align:justify;"> 
La MEI ne propose pas de balise spécifique à la nationalité d'une personne. Dans le cas où cette information est intéressante dans votre édition, nous vous proposons de l'indiquer via un élément &lt;country&gt; avec un attribut @type="nationality".

Nous conseillons d'utiliser la norme [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) pour identifier les pays indiqués.

Cette information peut être omise si l'orchestrateur est référencé avec une URI externe.
</p>

<!--<annot label="nationality">Français</annot> ? Est-ce mieux que country ? -->

```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName auth="VIAF" auth.uri="https://viaf.org/viaf/" codedval="32182557">Ludwig van Beethoven</persName>,
         <country type="nationality" auth="ISO 3166" auth.uri="https://www.iso.org/obp/ui/#iso:code:3166:" codedval="DE">allemand</country>
   </composer>
</work>
```

<a id="OCO_ref1"></a>

### Commanditaire

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Commanditaire|OCO|

<p style="text-align:justify;">
 L'identité de la personne ayant commandé la création ou la publication d’une œuvre peut être indiqué dans un élément persName avec un attribut @role adéquat. Pour remplir l'attribut @role, nous proposons de nous appuyer sur le vocabulaire DOREMUS des fonctions et donc de choisir "sponsor" [voir les différentes fonctions du vocabulaire DOREMUS](https://github.com/DOREMUS-ANR/knowledge-base/blob/master/vocabularies/function.ttl).
</p>

```xml
<work>
   <respStmt>
      <persName role="sponsor" auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="47837095">Franz von Walsegg</persName>
   </respStmt>
</work>
```

<p style="text-align:justify;">
S'il est besoin, dans votre projet d'édition numérique de rentrer dans les détails de l'identité du commanditaire, c'est dans l'élément &lt;work&gt; qu'il convient d'indiquer tous ces renseignements. À cet effet, la MEI nous propose différentes balises pour indiquer les noms d’emprunts, noms de plumes ou pseudonymes historiques. 
</p>

   **&lt;foreName&gt;** pour un prénom,


   **&lt;famName&gt;** pour un nom de famille,


   **&lt;genName&gt;** pour une composante de nom indiquant la génération, par exemple « Jr » ou « Sr »,


   **&lt;addName&gt;** pour un élément supplémentaire comme un surnom, une épithète ou un alias,


   **&lt;nameLink&gt;** pour une particule patronymique comme « de », « von » ou « van der » par exemple,


   **&lt;roleName&gt;**  pour la composante de nom indiquant un titre ou un rang comme « Sir ».


<p style="text-align:justify;">
Il convient alors de les intégrer dans l'élément &lt;persName&gt;. 
</p>

*Exemple du nom complet de Mozart*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://d-nb.info/gnd" authority="GND" codedval="118584596" role="composer">
            <famName>Mozart</famName>
            ,
            <foreName type="baptismal">Johannes</foreName>
            <foreName type="baptismal">Chrysostomus</foreName>
            <foreName type="familiar">Wolfgangus</foreName>
            <foreName type="baptismal">Theophilus</foreName>
         </persName>
   </composer>
</work>
```

<p style="text-align:justify;">
Il est possible d'indiquer l'évolution d'un nom avec les attributs @startdate et @enddate. 
</p>

*Exemple de l'évolution du nom de Fanny Mendelssohn durant sa vie*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://viaf.org/viaf/" authority="VIAF" codedval="2535006" role="composer">
            <famName startdate="1805-11-14" enddate="1829-10-03" type="birth">Mendelssohn</famName>
            <famName startdate="1816-03-21" enddate="1829-10-03" type="baptismal">Bartholdy</famName>
            <famName startdate="1829-10-03" enddate="1847-05-14" type="married">Hensel</famName>
            <foreName startdate="1805-11-14" enddate="1829-10-03" type="birth">Fanny</foreName>
            <foreName startdate="1805-11-14" enddate="1816-03-21" type="birth">Zippora</foreName>
            <foreName startdate="1816-03-21" enddate="1847-05-14" type="baptismal">Cäcilie</foreName>
         </persName>
   </composer>
</work>
```


<a id="OCL_ref1"></a>

## Collecteur de la musique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Collecteur de la musique|OCL|

<p style="text-align:justify;"> 
 Dans le cas d'une musique de tradition orale, le collecteur de la musique peut être indiqué en ajoutant un attribut @role à l'élément &lt;persName&gt; déclinant son identité. Nous proposons de nous appuyer sur le vocabulaire DOREMUS des fonctions et donc de choisir "collector_of_field_material"  [voir les fonctions dans le vocabulaire DOREMUS](https://github.com/DOREMUS-ANR/knowledge-base/blob/master/vocabularies/function.ttl).
 </p>
 
```xml
<biblStruc>
   <imprint>
      <resStmt>
         <persName role="collector_of_field_material" auth="VIAF" auth.uri="http://viaf.org/viaf/" codedval="179852912">Manuel García Matos</persName>
      </respStmt>
   </imprint>
</biblStruc>
```
<p style="text-align:justify;">
S'il est besoin, dans votre projet d'édition numérique de rentrer dans les détails de l'identité du collecteur de la musique, c'est dans l'élément &lt;work&gt; qu'il convient d'indiquer tous ces renseignements. À cet effet, la MEI nous propose différentes balises pour indiquer les noms d’emprunts, noms de plumes ou pseudonymes historiques. 
</p>

   **&lt;foreName&gt;** pour un prénom,


   **&lt;famName&gt;** pour un nom de famille,


   **&lt;genName&gt;** pour une composante de nom indiquant la génération, par exemple « Jr » ou « Sr »,


   **&lt;addName&gt;** pour un élément supplémentaire comme un surnom, une épithète ou un alias,


   **&lt;nameLink&gt;** pour une particule patronymique comme « de », « von » ou « van der » par exemple,


   **&lt;roleName&gt;**  pour la composante de nom indiquant un titre ou un rang comme « Sir ».

 
<p style="text-align:justify;">
Il convient alors de les intégrer dans l'élément &lt;persName&gt;. 
</p>

*Exemple du nom complet de Mozart*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://d-nb.info/gnd" authority="GND" codedval="118584596" role="composer">
            <famName>Mozart</famName>
            ,
            <foreName type="baptismal">Johannes</foreName>
            <foreName type="baptismal">Chrysostomus</foreName>
            <foreName type="familiar">Wolfgangus</foreName>
            <foreName type="baptismal">Theophilus</foreName>
         </persName>
   </composer>
</work>
```

<p style="text-align:justify;">
Il est possible d'indiquer l'évolution d'un nom avec les attributs @startdate et @enddate. 
</p>

*Exemple de l'évolution du nom de Fanny Mendelssohn durant sa vie*
```xml
<work xml:id="...">
   <composer xml:id="...">
         <persName authURI="http://viaf.org/viaf/" authority="VIAF" codedval="2535006" role="composer">
            <famName startdate="1805-11-14" enddate="1829-10-03" type="birth">Mendelssohn</famName>
            <famName startdate="1816-03-21" enddate="1829-10-03" type="baptismal">Bartholdy</famName>
            <famName startdate="1829-10-03" enddate="1847-05-14" type="married">Hensel</famName>
            <foreName startdate="1805-11-14" enddate="1829-10-03" type="birth">Fanny</foreName>
            <foreName startdate="1805-11-14" enddate="1816-03-21" type="birth">Zippora</foreName>
            <foreName startdate="1816-03-21" enddate="1847-05-14" type="baptismal">Cäcilie</foreName>
         </persName>
   </composer>
</work>
```

<a id="ODE_ref1"></a>

## Dédicace

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/elements/dedicatee.html#mayContain_class_tab){:target="_blank"}|Dédicace|ODE|

<p style="text-align:justify;"> 
 Lorsque l'œuvre éditée fait l'objet d'une dédicace. Nous pouvons indiquer la cible de cette dédicace dans l'élément &lt;dedicatee&gt; qui se situe dans la balise &lt;creation&gt;. Selon les besoins, &lt;dedicatee&gt; peut prendre des sujets divers : une personne physique (&lt;persName&gt;), morale (&lt;corpName&gt;), une délimitation géographique plus ou moins étendu (&lt;country&gt;, &lt;geogFeat&gt;, &lt;geogName&gt;, &lt;region&gt;, &lt;settlement&gt; ou &lt;street&gt;), un style (&lt;styleName&gt;) ou une période (&lt;periodName&gt;). La liste exhaustive se trouve dans la description de l'élément [&lt;dedicatee&gt;](https://music-encoding.org/guidelines/v5/elements/dedicatee.html#mayContain_class_tab).
</p>
 
<!-- il peut se trouver, entre c<creation> et <dedicatee>, l'élément <dedication> dont la définition est "Contains a dedicatory statement./
Contient une déclaration dédicatoire." Je suis d'avis qu'il s'agit plutôt de rapporter une dédicace précise, dans une démarche de description diplomatique. C'est pourquoi je fais le choix de ne pas rajouter cette couche. C'est à débattre. -->

```xml
<work>
   <creation>
      <dedicatee>
         <persName authURI="http://viaf.org/viaf/" authority="VIAF" codedval="7543434" role="dedicatee" >
            <foreName>Ferdinand</foreName> <famName>Gonzague</famName>, <roleName>duc</roleName> <nameLink>de</nameLink> <settlement>Mantoue</settlement> et <nameLink>de</nameLink> <settlement>Montferrat</settlement>
         </persName>
      </dedicatee>
   </creation>
</manifestation>  
```

<a id="TRN_ref1"></a>

## Traducteur du texte

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Indique, le cas échéant, l'identité de la personne responsable de la traduction de l'œuvre. |TRN|

<p style="text-align:justify;"> 
 Renseigner la personne responsable de la traduction d'une œuvre dépend avant tout du statut de cette dernière. S'il s'agit d'un traducteur historique (dans le cas où la traduction est une manifestation de l'œuvre), celui-ci est renseigné comme un &lt;contributor&gt; au sein de &lt;manifestationList&gt;. Sa fonction précise est indiquée à l'aide de @role="translator" - le terme "translator" fait partie des Marc Relators ainsi que du vocabulaire des fonctions de DOREMUS. L'identifiant du traducteur (@xml:id) doit être ajouté dans la définition de la langue &lt;language&gt;.
</p>

```xml
<work xml:id="...">
   <contributor>
      <persName xml:id="T1" role="translator" auth="..." auth.uri="..." codedval="...">XXX</persName>
   </contributor>   
   <langUsage>
      <language xml:id="Lat" type="original">Latin</language>
      <language xml:id="Fr" resp="T1" type="translation">French</language>
   </langUsage>          
</work>
```

<p style="text-align:justify;">
 Si, à l'inverse, il s'agit d'un traducteur ad hoc dont la traduction n'a qu'une valeur éditoriale, il est préférable de renseigner son identité dans &lt;fileDesc&gt;, avec l'ensemble des personnes disposant d'une responsabilité éditoriale. Le fonctionnement reste cependant le même que précédemment, dans la mesure où l'identifiant du traducteur doit à nouveau être indiqué dans la définition de la langue concernée (dans &lt;manifestationList&gt;), via @resp. 

 Localiser avec précision la place du traducteur et renseigner son identifiant dans &lt;language&gt; pallie l'absence de différence explicite en MEI entre un texte traduit constitutif de l'œuvre (traduction historique) et un texte traduit pour les besoins de l'édition (traduction éditoriale). 
</p>

```xml
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
       <respStmt xml:id="...">
          <persName xml:id="VV" role="translator" auth="..." auth.uri="http://..." codedval="...">...</persName>
       </respStmt>
   </titleStmt>
</fileDesc>

-------# plus bas

   <work xml:id="...">
      <langUsage>
         <language xml:id="..." type="original">...</language>
         <language xml:id="Fr" resp="VV" type="translation">...</language>
     </langUsage>          
   </work>
```

<a id="TXO_ref1"></a>

## Langue originale de la pièce

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 [3.6.6 Language Usage](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkLanguage){:target="_blank"}|Indique la langue originale de l'œuvre encodée. |TXO|


 &lt;langUsage&gt; contient l'ensemble des langues devant être décrites dans le fichier MEI. Dans le cas d'une seule langue renseignée, ici la langue originale, il n'apparait pas nécessaire de s'encombrer d'un attribut le précisant (comme dans l'exemple ci-dessous). Pour la distinction de plusieurs langues dans le cas de traductions ou d'adaptations, voir ci-dessous. 

Il est cependant conseillé, pour des questions d'interopérabilité, d'ajouter l'identifiant ISO de la langue renseignée à l'aide des attributs @auth.uri et @uri.


```xml
<work xml:id="...">
   <langUsage>
      <language xml:id="..." auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="fra" uri="ISO 639">French</language>
   </langUsage>         
</work>
```

<a id="TXL_ref1"></a>

### Langue de la pièce encodée (si différente de la langue originale)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.6 Language Usage](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkLanguage){:target="_blank"}|Indique la langue de l'œuvre encodée, si différente de la langue originale (traduction, adaptation, etc). |TXL|

 &lt;langUsage>/<language&gt;

<!-- Faut-il faire une manifestation pour l'édition numérique ? -->

<p style="text-align:justify;"> 
 En cas de langue traduite utilisée au sein du fichier, il semble que la seule possibilité en MEI (en raison de l'absence du &lt;ProfilDesc&gt; de la TEI) est de préciser la nature des langues à l'aide d'un @type (type="original", type="translation"). C'est à ce niveau que la balise &lt;langUsage&gt; trouve véritablement son sens en permettant de lister plusieurs langues. 

En plus de l'identifiant ISO, il est conseillé de préciser un @xml:id propre à chaque langue afin de pouvoir renseigner ce même identifiant dans la partie &lt;music&gt;, dans &lt;verse&gt; ou &lt;syl&gt; à l'aide de @xml:lang - précisant ainsi la langue utilisée pour chaque entité textuelle présente dans l'édition numérique.  
</p>

```xml
<work xml:id="...">
   <langUsage>
      <language xml:id="Lat" auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="lat" uri="ISO 639-3" type="original">Latin</language>
      <language xml:id="Fr" auth="..." auth.uri="https://iso639-3.sil.org/code/" codedval="fra" uri="ISO 639-3" type="translation">French</language>
   </langUsage>          
</work>
```

<a id="PPR_ref2"></a>

## Date et éditeur de la première publication

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Premier éditeur|PPR|

 
```xml
<work>
   <editor xml:id="E1" n="1" precedes="#E2">
      <persName></persName>
   </editor>
   <editor xml:id="E2" n="2" follows="#E1">
      <persName></persName>
   </editor>     
</work>
```

Autre option : Même logique s'il s'agit de la maison d'édition en utilisant &lt;imprint&gt;. Des dates peuvent également être ajoutées pour &lt;editor&gt; pour plus de précisions.


```xml
<work>
      <editor xml:id="E1" n="1" precedes="#E2">
         <persName></persName>
      </editor>
      <editor xml:id="E2" n="2" follows="#E1">
         <persName></persName>
      </editor>  
</work>
```

```xml
<work>
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
</work>
```

<p style="text-align:justify;"> 
 La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;date&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".
</p>


```xml
<work>
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
</work>
```


<a id="AIN_ref1"></a>

## Effectif

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Effectif|AIN|

 
```xml
<work>
   <perfMedium>
      <perfResList>
         <perfRes>...</PerfRes>
      </perfResList>
   </perfMedium>
</work>
```
 
 
<p style="text-align:justify;"> 
Pour être précis dans le nombre de musicien, on utilise l'attribut @count dans l'élément perfRes.
</p> 

```xml
<work>
   <perfMedium>
      <perfResList>
         <perfRes count="2">Violons</perfRes>
         <perfRes count="1">Alto</perfRes>
         <perfRes count="1">Violoncelle</perfRes>
      </perfResList>
   </perfMedium>
</work>
```



<a id="ODT_ref1"></a>

## Date de composition

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5 Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory){:target="_blank"}|Date de composition de l'œuvre encodée.|ODT|



 &lt;creation>/<date&gt;

Autre option : 

<p style="text-align:justify;"> 
 La date de composition peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;date&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".
</p>

```xml
<manifestation>
   <creation>
      <date notbefore="1530-01-01" notafter="1550-01-01" cert="low">1540</date>
   </creation>
</manifestation>
```

<a id="OCY_ref1"></a>

## Pays de composition de l'œuvre encodée

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 | [3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Pays dans lequel l'œuvre encodée à été composée. |OCY|


```xml
 <creation>
         <date notbefore="1530" notafter="1550" cert="low">1540</date>
         <country>France</country>
      </creation>
```

```xml
<manifestation>
   <creation>
      <date notbefore="1530" notafter="1550" cert="low">1540</date>
      <country>France</country>
   </creation>
</manifestation>
```

<a id="OPC_ref1"></a>

### Ville de composition

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Ville de composition|OPC|

 
```xml
<manifestation>
   <creation>
      <date notbefore="1530" notafter="1550" cert="low">1540</date>
      <country>France</country>
      <settlement>Paris</settlement>
   </creation>
</manifestation>
```

```xml
<manifestation>
   <creation>
      <date notbefore="1530" notafter="1550" cert="low">1540</date>
      <country>France</country>
      <settlement>Paris</settlement>
   </creation>
</manifestation>
```

<a id="AGN_ref1"></a>

## Désignation du genre musical

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.12 Classification](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkClass){:target="_blank"}|Désignation du genre musical|AGN|

 
```xml
<manifestation>
   <classification xml :id="…">
      <termList xml:id="…">
         <term>
            <genre></genre>
         </term>
      </termList>
   </classification>
</manifestation>
```

```xml
<manifestation>
   <classification xml :id="…">
      <termList xml:id="…">
         <term label="music genre" xml:id="…">...</term>
      </termList>
   </classification>
</manifestation>
```

<a id="AST_ref1"></a>

## Désignation du style/période/typologie de l'œuvre

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.12 Classification](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkClass){:target="_blank"}|Désignation du style/période/typologie de l'œuvre|AST|

 
```xml
<manifestation>
   <classification xml :id="…">
      <termList xml:id="…">
         <term>
            <periodName>...</periodName>
            <styleName>...</styleName>
         </term>
      </termList>
   </classification> 
</manifestation> 
```

```xml
<manifestation>
   <creation xml:id="…">
      <periodName>Contemporary music</periodName>
      <styleName>Minimalist</styleName>
   </creation>
</manifestation>   
```

<a id="AMD_ref1"></a>

## Classification du mode (Moyen âge et Renaissance)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.3. Key, Tempo, and Meter](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkKeyTempoMeter){:target="_blank"}|Classification du mode (Moyen âge et Renaissance){:target="_blank"}|AMD|

 
```xml
<manifestation>
   <key mode="dorian">
   <creation xml:id="…">
      <periodName>Contemporary music</periodName>
      <styleName>Minimalist</styleName>
   </creation>
</manifestation> 
```

<p style="text-align:justify;"> 
 En MEI, le mode se désigne dans &lt;key&gt;, donc dans &lt;manifestation&gt; ou &lt;expression&gt;, avec @mode. L'information peut également se retrouver dans la définition des portées. Il y a trois vocabulaires contrôlés MEI pour les modes. Voir data.mode.
</p>

```xml
<manifestation>
   <key mode="dorian">
   <creation xml:id="…">
      <periodName>Contemporary music</periodName>
      <styleName>Minimalist</styleName>
   </creation>
</manifestation>
```

<a id="AMT_ref1"></a>

## Classification métrique

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.3. Key, Tempo, and Meter](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkKeyTempoMeter){:target="_blank"}|Classification métrique|AMT|

&lt;meter&gt;



## Interprétation de l'œuvre

<a id="MGN_ref1"></a>

### Nom du groupe des interprètes

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium){:target="_blank"}|Nom du groupe des interprètes|MGN|

 
```xml
<work>
   <perfMedium>
      <perfResList>
         <perfRes>
            <corpName auth="..." auth.uri="http://..." codedval="..." role="...">Nom du groupe des interprètes</corpName>
            <persName auth="..." auth.uri="..." codedval="..." >Nom de l'interprète</persName>
         </perfRes>
      </perfResList>
   </perfMedium>
</work>
```

<p style="text-align:justify;"> 
L'instrumentation d'une œuvre se définit au sein de l'élément &lt;perfMedium&gt;. Il contient entre une et plusieurs balise &lt;perfResList&gt; regroupant et décrivant plusieurs ressources instrumentales ou vocales considérées comme un ensemble cohérent comme un chœur ou une section de cordes.
Chaque instrument ou voix doit être contenu dans son propre élément &gt;perfRes&lt;. 

Afin de permettre l'interopérabilité de ces informations, nous vous invitons à suivre les recommandations du chapitre sur les [Référentiels d'autorités et thesauri](guide/thesauri.html) en utisilant le thesaurus MIMO comme dans notre exemple.
</p>

 <!-- Je ne crois pas que cela soit nécessaire dans un header d'une édition critique. [ONgarde] -->


```xml
<work>
   <perfMedium>
      <perfResList>
      <head>Samhyeon Yukgak</head>
         <perfRes auth="MIMO" auth.uri="http://www.mimo-db.eu/InstrumentsKeywords/" codedval="5228" >Haegeum</perfRes>
         <perfRes auth="MIMO" auth.uri="http://www.mimo-db.eu/InstrumentsKeywords/" codedval="4240" >P'iri</perfRes>
         <perfRes auth="MIMO" auth.uri="http://www.mimo-db.eu/InstrumentsKeywords/" codedval="4025" >Daegeum</perfRes>
         <perfRes auth="MIMO" auth.uri="http://www.mimo-db.eu/InstrumentsKeywords/" codedval="4240" >P'iri</perfRes>
         <perfRes auth="MIMO" auth.uri="http://www.mimo-db.eu/InstrumentsKeywords/" codedval="2524" >Janggu</perfRes>
         <perfRes auth="MIMO" auth.uri="http://www.mimo-db.eu/InstrumentsKeywords/" codedval="2707" >Puk</perfRes>
      </perfResList>
   </perfMedium>
</work>
```

<a id="MPN_ref1"></a>

### Nom de l'interprète

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium){:target="_blank"}|Nom de l'interprète|MPN|

<p style="text-align:justify;">
Dans certains cas, il apparaît important d'insister sur la provenance de l'attribution d'un intéprète. Nous vous préconisons de renseigner cette information dans la balise &lt;persName&gt; à l'aide de l'attribut @evidence. Cet attribut peut recevoir les valeurs suivantes :
</p>

<!-- ça ne devrait pas rester dans workList. Plutôt une manifestation, un concert ou un CD. À déplacer donc. -->

```xml
<work>
   <perfMedium>
      <perfRes>
         <persName auth="..." auth.uri="..." codedval="..." >Nom de l'interprète</persName>
      </perfRes>
   </perfMedium>
</work>
```
 
```xml
<manifestation>
   <perfMedium>
      <perfRes>
         <persName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="302774677" role="violist">Guillaume Becker</persName>
      </perfRes>
   </perfMedium>
</manifestation>
```

<a id="MPS_ref1"></a>

### Interprète soupçonné (?)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium){:target="_blank"}|Interprète soupçonné (?){:target="_blank"}|MPS|

 <p style="text-align:justify;">
Dans certains cas, il apparaît important d'insister sur la provenance de l'attribution d'un intéprète. Nous vous préconisons de renseigner cette information dans la balise &lt;persName&gt; à l'aide de l'attribut @evidence. Cet attribut peut recevoir les valeurs suivantes :
</p>
<!-- ça ne devrait pas rester dans workList. Plutôt une manifestation, un concert ou un CD. À déplacer donc. -->
```xml
<manifestation>
   <perfMedium>
      <perfRes>
         <persName auth="..." auth.uri="http://..." codedval="..." role="..." cert="high, medium, low ou unknown">Nom de l'interprète</persName>
      </perfRes>
   </perfMedium>
</manifestation>
```
 Le niveau de certitude accordé à l'interprète peut être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".


```xml
<manifestation>
   <perfMedium>
      <perfRes>
         <persName auth="VIAF "auth.uri="http://viaf.org/viaf/" codedval="302774677" role="violist" cert="high">Guillaume Becker</persName>
      </perfRes>
   </perfMedium>
</manifestation>
```

<strong>"internal"</strong> quand cette attribution provient d'une information interne à la source de votre édition.


<strong>"external"</strong> quand cette attribution provient d'une information externe à la source de votre édition.


<strong>"conjecture"</strong> quand cette attribution provient d'un éditeur ou d'un chercheur sur la base de son expertise.


<p style="text-align:justify;">
Par ailleurs, le niveau de certitude accordé à cette attribution peut également être précisé à l'aide de l'attribut @cert dont les valeurs vont de "high", pour le plus grand degré de confiance, à "medium", puis "low" pour le niveau de certitude le plus faible. Il est également possible d'indiquer "unknown" quand cette évaluation est impossible.
</p>


```xml
<fileDesc xml:id="...">
   <titleStmt xml:id="...">
      <title xml:id="...">
         ...
      </title>
      <composer xml:id="...">
         <persName evidence="(internal, external ou conjecture)" role="composer" auth="..." auth.uri="http://..." codedval="...">
            ...
         </persName> 
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

<a id="MRD_ref1"></a>

### Date d'exécution/représentation

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5. Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory){:target="_blank"}|Date d'exécution/représentation|MRD|

<!-- ça ne devrait pas rester dans workList. Plutôt une manifestation, un concert ou un CD. À déplacer donc. -->
```xml
<manifestation>
   <title>...</title>
   <history>
      <eventList>
         <event type="performance">
            <date isodate="aaaa-mm-jj">AAAA-MM-JJ</date>
         </event>
      </eventList>
   </history>
</manifestation>
```

Autre option : Dans le cas d'une œuvre dont il existe différentes expressions, dans le sens du modèle FRBR, il est possible de renseigner les informations concernants les exécutions/représentations de chaque expression distinctement.

```xml
<manifestation>
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
</manifestation>
```

<p style="text-align:justify;"> 
 Selon la typologie du projet, on va indiquer les informations concernant la représentation dans WorkList ou dans expressionList.
La date de composition peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;date&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".
</p>


```xml
<manifestation>
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
</manifestation>
```

<a id="MLC_ref1"></a>

### Lieu d'exécution/représentation

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.5. Work History](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkHistory){:target="_blank"}|Lieu d'exécution/représentation|MLC|

 
```xml
<manifestation>
   <title>...</tite>
   <history>
      <eventList>
         <event type="performance">
            <geogName>Vienne</geogName>
         </event>
      </eventList>
   </history>
</manifestation>
```
Autre option : Si nous possédons l'adresse exacte du lieu d'exécution/représentation, nous pouvons utiliser, à la place de l'élément geogName, l'élément adress.
```xml
<manifestation>
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
</manifestation>
```


```xml
<manifestation>
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
</manifestation>
```

<a id="MCN_ref1"></a>

### Nom du responsable de l'exécution/représentation (chef d'orchestre)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.6.7 Performance Medium](https://music-encoding.org/guidelines/v5/content/metadata.html#headerWorkMedium){:target="_blank"}|Nom du responsable de l'exécution/représentation (chef d'orchestre){:target="_blank"}|MCN|

   <!-- event ne peut pas contenir perfMedium -->
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


```xml
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
<manifestation>
   <title>...</title>
   <history>
      <eventList>
         <event type="premiere">
            <date isodate="aaaa-mm-jj">AAAA-MM-JJ</date>
         </event>
      </eventList>
   </history>
</manifestation>
```


<p style="text-align:justify;"> 
 La date de la première exécution d'une œuvre est à situé, a minima, au niveau de manifestationList, dans une balise &lt;event&gt; dont l'attribut @type prend pour valeur « premiere ». 
La date peut aussi être nuancée ou approchée à l'aide d'attributs, surtout dans le cas d'une date incertaine. En MEI, la date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;date&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs sont "high", "medium", "low" et "unknown".
</p>

```xml
<manifestation>
   <title>Pelléas et Mélisande</title>
   <eventList>
      <event type="premiere">
         <date isodate="1902-04-30">1902-04-30</date>
         <placeName>Opéra-Comique, Paris</placeName>
         <perfName>Direction : André Messager</perfName>
      </event>
   </eventList>
</manifestation>
```
<p style="text-align:justify;"> 
 Toutes les dates inscrites dans le fichier MEI peuvent être nuancées ou approchées à l'aide d'attributs, surtout dans le cas de dates incertaines. En MEI, une date renseignée dans les attributs doit suivre la norme ISO 8601 (AAAA-MM-JJ). La valeur de la balise &lt;date&gt; est libre pour sa part. Plusieurs usages se rencontrent d'ailleurs dans les guidelines ("June 1987"; "2011"). Nous conseillons toutefois de suivre au maximum la norme ISO (AAAA ; AAAA-MM ou AAAA-MM-JJ) pour assurer sa bonne compréhension. Par ailleurs, le niveau de certitude accordé à une date peut également être précisé à l'aide de l'attribut @cert dont les valeurs vont de "high", pour le plus grand degré de confiance, à "medium", puis "low" pour le niveau de certitude le plus faible.
</p>

```xml
<date isodate="2022">2022</date>
<date isodate="2022-02">Février 2022</date>
<date isodate="2022-02-22">22 Février 2022</date>
```

<a id="GAW_ref1"></a>

### Œuvre associée (ex. Stéphane Mallarmé, L’Après-midi d’un faune)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.5.1 FRBR Entities in MEI](https://music-encoding.org/guidelines/v5/content/metadata.html#FRBRentities){:target="_blank"}|Œuvre associée (ex. Stéphane Mallarmé, L’Après-midi d’un faune){:target="_blank"}|GAW|

 
```xml
<manifestation>
   <expressionList>
      <expression>
         <title>...</title>
         ...
      </expression>
   </expressionList>
</manifestation>
```
 
<p style="text-align:justify;"> 
Les œuvres associées sont, au sens du modèle FRBR, des expressions différentes d'une œuvre. S'il est besoin de renseigner les informations concernant les autres expressions d'une œuvre, ces renseignements se situeront dans un élément expression dédié à chaque œuvre associée.
</p>

```xml
<manifestation>
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
</manifestation>
```

<a id="A-GCO_ref1"></a>

#### Désignation de la collection

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.4.1.4 Series Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerSeriesStatement){:target="_blank"}|Désignation de la collection|ACO & GCO|

 

Autre option : 

<p style="text-align:justify;"> 
 La collection concerne les manifestations dans le modèles FRBR. C'est une manifestation précise qui fait partie d'une "collection". Cela peut aussi être l'item ou la source.
 </p>

```xml
<sourceDesc>
<source>
<series>

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

## Dans la partie <music> (il faut dire que ce genre d'usage n'est pas recommandé) 

<a id="OAC_ref1"></a>

### Numéro d'acte (<music?>)

 |Chapitre des Guidelines | Définition | Clé HUMDRUM |
 | :--------------- |:---------------:| -----:|
 |[3.3.1. Title Statement](https://music-encoding.org/guidelines/v5/content/metadata.html#headerTitleStatement){:target="_blank"}|Numéro d'acte|OAC|


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

<p style="text-align:justify;"> 
 S'il est bien question d'une précision au sein de &lt;music&gt; : "The score and parts elements are placed here and not directly within the body element because score and part characteristics may change from mdiv to mdiv. For example, the 2nd movement of a symphony may require different performing forces (and therefore different score and part layout) than the other movements. The mdiv element may be recursively nested in order to represent music which exhibits this kind of structure. For example, an opera is normally divided into acts, which are in turn divided into scenes." https://music-encoding.org/guidelines/v5/elements/mdiv.html
</p>

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

<p style="text-align:justify;"> 
 S'il s'agit d'un seul mouvement encodé au sein du fichier MEI, alors il me semble que le renseignement est similaire à celui renseigné pour "titre de l'œuvre d'appartenance". Sil s'agit de plusieurs mouvements encodés au sein d'un même fichier MEI (peu recommandé), dans ce cas il faudrait indiquer cette information dans &lt;music&gt; à l'aide de &lt;mdiv&gt;. 
</p>



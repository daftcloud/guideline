---
title: Référentiels d'autorités et thesauri
layout: default
nav_order: 3
---

<p style="text-align:justify;">
Dans le souci de proposer un guide aussi complet que possible, fondé sur des cas concrets issus des pratiques éditoriales numériques actuelles, nous présentons ci-dessous une sélection de référentiels et de vocabulaires contrôlés susceptibles d’être mobilisés dans le cadre d’une édition critique musicale. Organisée par type d’entité, cette liste n’a pas vocation à être exhaustive ni prescriptive. Elle rassemble avant tout les référentiels que nous recommandons en raison de leur diffusion, de leur stabilité et de leur intérêt pour l’interopérabilité des données. Les différents vocabulaires présentés seront évoqués et contextualisés au fil du guide, en fonction des problématiques éditoriales auxquelles ils répondent.
</p>

# Référentiels d’autorité

## Individus

<p style="text-align:justify;">

Les référentiels d’autorité consacrés aux individus sont sans doute les plus nombreux. Dans nos recommandations, plusieurs solutions peuvent être envisagées selon la nature des personnes dont l’identité doit être encodée. Pour les personnalités historiques (compositeur.ice, musicien.ne, auteur.ice, éditeur.ice, etc.), nous privilégions l’utilisation de référentiels tels que [VIAF](https://viaf.org/fr), [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page) ou l’[ISNI](https://isni.org/). Ces ressources présentent l’avantage d’être largement diffusées à l’échelle internationale. Elles jouent un rôle central dans l’écosystème des données liées (Linked Open Data) en servant de nœuds d’interconnexion entre de nombreux catalogues, bases de données et institutions patrimoniales. Elles permettent ainsi de facilement désambiguïser les individus, de relier efficacement les différentes variantes d’un même nom et de faciliter l’interopérabilité des données entre de nombreux projets et institutions. 

Lorsque la personne à renseigner est directement liée à la réalisation de l’édition MEI elle-même (encodeur, correcteur.ice, membre de l’équipe éditoriale, responsable scientifique, etc.), nous privilégions l’utilisation de référentiels académiques tels qu’[ORCID](https://orcid.org/). Désormais largement adopté dans le monde académique, ORCID permet d’identifier de manière unique et pérenne les chercheurs et les différents acteurs de la recherche. Le recours à un identifiant ORCID facilite non seulement l’attribution des contributions au sein d’un projet éditorial, mais favorise également leur visibilité et leur intégration dans l’écosystème plus large de la recherche scientifique. 
</p>

## Lieux

<p style="text-align:justify;">

Pour l’identification des lieux, nous préconisons l’utilisation du référentiel [GeoNames](https://www.geonames.org/). Développé comme une base de données géographique ouverte et collaborative, GeoNames recense plusieurs millions d’entités géographiques à travers le monde, qu’il s’agisse de pays, de régions, de villes, de cours d’eau, de reliefs ou encore de sites patrimoniaux. Chaque lieu y est associé à un identifiant unique et pérenne, ainsi qu’à un ensemble d’informations normalisées telles que les coordonnées géographiques, les variantes linguistiques du nom ou encore les relations administratives.

L’utilisation de GeoNames permet ainsi de désambiguïser les toponymes, de relier les données éditoriales à des référentiels largement reconnus et de faciliter les traitements géospatiaux ou les croisements avec d’autres jeux de données. Dans le cadre d’une édition critique musicale, ce référentiel constitue une solution particulièrement pertinente pour documenter les lieux de composition, de copie, de conservation, d’exécution ou de diffusion des œuvres et des sources.
</p>

## Sources musicales

Pour l’identification des sources musicales, nous recommandons naturellement le recours au [RISM](https://rism.info/) (Répertoire International des Sources Musicales). Fondé en 1952, ce projet international a pour objectif de recenser et de décrire les sources musicales conservées dans les bibliothèques, archives, musées et collections privées du monde entier. Il constitue aujourd’hui l’un des principaux outils de référence pour la localisation et l’identification des manuscrits et imprimés musicaux, en fournissant des notices normalisées et des identifiants pérennes largement reconnus par la communauté scientifique.

Dans certains contextes, des référentiels plus spécialisés peuvent naturellement être privilégiés. [DIAMM](https://www.diamm.ac.uk/) (Digital Image Archive of Medieval Music) représente ainsi une référence incontournable pour les répertoires polyphoniques médiévaux, tandis que [Cantus Index](https://cantusindex.org/) constitue un outil particulièrement adapté à l’identification et à l’étude des sources de plain-chant. D’autres catalogues spécialisés peuvent également être mobilisés selon les répertoires, les périodes ou les traditions musicales concernées.

Il convient toutefois de souligner que le RISM intègre désormais un nombre croissant de données issues d’autres catalogues, inventaires et projets numériques. Grâce à sa large diffusion internationale et à sa capacité d’agrégation, il tend de plus en plus à jouer le rôle de point d’accès central au patrimoine musical écrit. Dans une perspective d’interopérabilité et de pérennisation des données, il demeure ainsi le référentiel à privilégier chaque fois qu’un identifiant RISM est disponible.
</p>


Pour standardiser les informations relatives aux personnalités, concepts ou lieux, il est recommandé de s’appuyer sur des fichiers d'autorité. Ces référentiels permettent d’assurer la cohérence et la fiabilité des données en fournissant des identifiants uniques et normalisés.
Nous utilisons dans ce guide le site [VIAF](https://www.oclc.org/fr/viaf.html) pour décliner les identités des personnalités ayant une responsabilité dans les sources, comme les auteurs, artistes ou autres contributeurs. [ORCID](https://orcid.org/) permet, quant à lui, d’identifier de manière unique les chercheurs et les contributeurs scientifiques. [GeoNames](https://www.geonames.org/) est une base de données géographique qui permet d’identifier précisément des lieux, qu’il s’agisse de villes, de régions ou de sites naturels. [MIMO](http://www.mimo-db.eu/InstrumentsKeywords/) est un référentiel dédié à l’identification des instruments de musique. Enfin, [RISM](https://rism.info/) permet d'identifier les œuvres musicales, notamment les manuscrits et les partitions, afin de standardiser leur référencement.

Dans cet objectif de cohérence et de précision de la production de données, condition <i>sine qua none</i> pour assurer l'interopérabilité de nos corpus nous nous sommes appuyés sur des vocabulaires contrôlés reconnus, tels que ceux développés par le projet DOREMUS pour normaliser la valeur de certains attributs dont l'usage ne fait pas encore l'objet d'un consensus. Cette approche nous permet de garantir une standardisation rigoureuse des termes utilisés, en s’appuyant sur des référentiels spécialisés et multilingues, conçus pour répondre aux besoins spécifiques de nos domaines de recherche. 

Afin d'indiquer les autorité garantissant les informations que nous indiquons dans nos éditions, la MEI met à notre disposition trois attributs : @auth (pour les sigles des organismes d'autorité), @auth.uri (pour la base de l'uri utilisé par l'organisme) et @codedval (pour la valeur de la donnée liée.)

Dans l'exemple ci-dessous, l'identité de Manuel García Matos est lié à l'URI [http://viaf.org/viaf/179852912](http://viaf.org/viaf/179852912). 
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



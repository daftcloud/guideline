---
title: Référentiels d'autorités et thesauri
layout: default
nav_order: 3
---

# L'autorité

<p style="text-align:justify;">

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



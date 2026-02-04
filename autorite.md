---
title: L'autorité
layout: default
nav_order: 3
---

# L'autorité

<p style="text-align:justify;">
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



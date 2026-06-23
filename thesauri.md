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
</p>
<p style="text-align:justify;">
Lorsque la personne à renseigner est directement liée à la réalisation de l’édition MEI elle-même (encodeur, correcteur.ice, membre de l’équipe éditoriale, responsable scientifique, etc.), nous privilégions l’utilisation de référentiels académiques tels qu’[ORCID](https://orcid.org/). Désormais largement adopté dans le monde académique, ORCID permet d’identifier de manière unique et pérenne les chercheurs et les différents acteurs de la recherche. Le recours à un identifiant ORCID facilite non seulement l’attribution des contributions au sein d’un projet éditorial, mais favorise également leur visibilité et leur intégration dans l’écosystème plus large de la recherche scientifique. 
</p>

## Lieux
<p style="text-align:justify;">
Pour l’identification des lieux, nous préconisons l’utilisation du référentiel [GeoNames](https://www.geonames.org/). Développé comme une base de données géographique ouverte et collaborative, GeoNames recense plusieurs millions d’entités géographiques à travers le monde, qu’il s’agisse de pays, de régions, de villes, de cours d’eau, de reliefs ou encore de sites patrimoniaux. Chaque lieu y est associé à un identifiant unique et pérenne, ainsi qu’à un ensemble d’informations normalisées telles que les coordonnées géographiques, les variantes linguistiques du nom ou encore les relations administratives.
</p>
<p style="text-align:justify;">
L’utilisation de GeoNames permet ainsi de désambiguïser les toponymes, de relier les données éditoriales à des référentiels largement reconnus et de faciliter les traitements géospatiaux ou les croisements avec d’autres jeux de données. Dans le cadre d’une édition critique musicale, ce référentiel constitue une solution particulièrement pertinente pour documenter les lieux de composition, de copie, de conservation, d’exécution ou de diffusion des œuvres et des sources.
</p>

## Sources musicales
<p style="text-align:justify;">
Pour l’identification des sources musicales, nous recommandons naturellement le recours au [RISM](https://rism.info/) (Répertoire International des Sources Musicales). Fondé en 1952, ce projet international a pour objectif de recenser et de décrire les sources musicales conservées dans les bibliothèques, archives, musées et collections privées du monde entier. Il constitue aujourd’hui l’un des principaux outils de référence pour la localisation et l’identification des manuscrits et imprimés musicaux, en fournissant des notices normalisées et des identifiants pérennes largement reconnus par la communauté scientifique.
</p>
<p style="text-align:justify;">
Dans certains contextes, des référentiels plus spécialisés peuvent naturellement être privilégiés. [DIAMM](https://www.diamm.ac.uk/) (Digital Image Archive of Medieval Music) représente ainsi une référence incontournable pour les répertoires polyphoniques médiévaux, tandis que [Cantus Index](https://cantusindex.org/) constitue un outil particulièrement adapté à l’identification et à l’étude des sources de plain-chant. D’autres catalogues spécialisés peuvent également être mobilisés selon les répertoires, les périodes ou les traditions musicales concernées.
</p>
<p style="text-align:justify;">
Il convient toutefois de souligner que le RISM intègre désormais un nombre croissant de données issues d’autres catalogues, inventaires et projets numériques. Grâce à sa large diffusion internationale et à sa capacité d’agrégation, il tend de plus en plus à jouer le rôle de point d’accès central au patrimoine musical écrit. Dans une perspective d’interopérabilité et de pérennisation des données, il demeure ainsi le référentiel à privilégier chaque fois qu’un identifiant RISM est disponible.
</p>

# Thésauri
## Instruments de musique
<p style="text-align:justify;">
Pour l’identification et la désignation des instruments de musique, nous recommandons l’utilisation du thésaurus développé par le projet [MIMO](https://vocabulary.mimo-international.com/InstrumentsKeywords/fr/) (Musical Instrument Museums Online). Conçu dans le cadre d’une collaboration internationale entre plusieurs musées et institutions patrimoniales, ce référentiel propose une nomenclature normalisée des instruments de musique fondée sur la classification organologique de Hornbostel et Sachs. Chaque terme est associé à un identifiant pérenne et s’inscrit dans une structure hiérarchique permettant de relier les instruments à leurs familles et sous-familles respectives.
</p>
<p style="text-align:justify;"> 
L’intérêt principal du thésaurus MIMO réside dans sa capacité à harmoniser la description des instruments au sein de collections et de bases de données très diverses. Son utilisation favorise ainsi la cohérence terminologique, la recherche transversale et l’interopérabilité entre les projets patrimoniaux, musicologiques et muséographiques. Il permet également de gérer les variations linguistiques et les dénominations concurrentes que peuvent recevoir certains instruments selon les époques, les traditions ou les aires culturelles.
</p>

## Genres musicaux
<p style="text-align:justify;">
Pour l’identification des genres musicaux, nous préconisons le vocabulaire de l'IAML enrichi dans le cadre du projet Doremus : [List of musical genres according to IAML](https://data.doremus.org/vocabulary/iaml/genre/). Conçu en collaboration avec plusieurs grandes institutions de conservation et bibliothèques, ce référentiel fournit une liste structurée de genres musicaux permettant de décrire de manière cohérente des répertoires très variés. Son utilisation favorise l’harmonisation des métadonnées et facilite les recherches transversales entre catalogues et bases de données. Dans le contexte d’une édition critique, il permet notamment de normaliser la description des œuvres tout en conservant un haut niveau d’interopérabilité avec les autres infrastructures de données musicales.
</p>

## Adaptations et dérivations
<p style="text-align:justify;"> 
Pour caractériser les relations de dérivation entre œuvres, nous recommandons l’utilisation du vocabulaire [List of Types of Derivation](https://data.doremus.org/vocabulary/derivation/) du projet Doremus. Ce thésaurus propose une typologie normalisée permettant de décrire les différentes formes de transformations qu’une œuvre peut subir au cours de sa transmission ou de sa réception : arrangement, orchestration, paraphrase, etc. L’emploi de ce vocabulaire permet d’expliciter avec précision la nature des liens existant entre plusieurs états ou versions d’une même œuvre et favorise l’interopérabilité des données entre catalogues, bibliothèques et éditions numériques.
</p>

## Fonctions 
<p style="text-align:justify;">
Il existe différents répertoires définissant les fonctions ou rôles exercés par des individus dans le processus de création, de transmission, etc. La Music Ontology constitue à ce titre un cadre conceptuel pour la description de l’objet musical et de son environnement documentaire, notamment dans le domaine des ressources enregistrées. Toutefois, son approche demeure principalement centrée sur la ressource musicale elle-même et ne permet pas toujours d’exprimer de manière explicite les relations entre les individus et les différentes matérialités musicales traditionnelles.
Pour la description des fonctions, nous recommandons prioritairement l’usage du vocabulaire Doremus [Relationship Designators for Agents](https://data.doremus.org/vocabulary/function/). Ce thésaurus comprend 103 concepts spécifiquement conçus pour qualifier les rôles des personnes intervenant dans le cycle de vie d’une œuvre ou d’une source. Une telle granularité s’avère particulièrement précieuse dans le cadre d’une édition critique où plusieurs acteurs peuvent intervenir à différents niveaux de la chaîne de production musicale et documentaire.
</p>
<p style="text-align:justify;"> 
Il convient de noter que les guidelines de la MEI préconisent l’emploi des [MARC Relators](https://www.loc.gov/marc/relators/relacode.html) publiés par la Library of Congress, notamment à travers l’attribut @role. Cependant, certaines définitions proposées par ce référentiel peuvent paraître peu adaptées aux besoins de la musicologie. Ainsi, le concept fondamental de 'composer' y est défini comme « A person, family, or organization responsible for creating or contributing to a musical resource by adding music to a work that originally lacked it or supplements it ». Une telle formulation, davantage orientée vers les problématiques bibliothéconomiques, s’éloigne de l’acception commune retenue en musicologie. Pour cette raison, nous privilégions le vocabulaire Doremus dont les définitions apparaissent plus directement alignées sur les pratiques de description et d’analyse partagées en musicologie.
</p>

## Concepts artistiques connexes 
<p style="text-align:justify;">
Pour la description des concepts, des techniques, des objets culturels ou encore de certaines notions liées à la création artistique, nous recommandons l’utilisation de l’[Art & Architecture Thesaurus](https://www.getty.edu/research/tools/vocabularies/aat/) développé par le Getty Research Institute. Ce vocabulaire contrôlé rassemble plusieurs dizaines de milliers de concepts relatifs aux arts, à l’architecture, au patrimoine culturel et aux pratiques artistiques. Organisé de manière hiérarchique et multilingue, il permet d’employer une terminologie normalisée tout en facilitant les rapprochements entre disciplines et projets de recherche. Dans le cadre d’une édition critique musicale, l’AAT peut être particulièrement utile pour décrire des contextes culturels et patrimoniaux associés aux oeuvres musicales.
</p>


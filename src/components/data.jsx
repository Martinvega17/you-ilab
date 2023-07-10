import React, { useState } from 'react';
import salvador from '../assets/team/salvador.jpg';
import viridiana from '../assets/team/viridiana.jpg';
import lourdes from '../assets/team/lourdes.jpg';
import miguel from '../assets/team/miguel.jpg';
import juanjo from '../assets/team/juanjo.jpg';

const dataDigital = [
    {
        id: 1,
        name: 'Salvador Ruíz Correa',
        profession: 'Doctor en Ingeniería Eléctrica',
        text: 'Salvador Ruiz-Correa tiene los grados de licenciatura y maestría en Ingeniería Eléctrica de la Universidad Nacional Autónoma de México y el de doctorado de la Universidad de Washington en Seattle. Sus intereses se centran en aplicaciones de inteligencia artificial y computación ubicua para el bien social en el Sur Global, con énfasis en México. En el IPICYT es investigador del Centro Nacional de Supercómputo (CNS), director del You-i Lab, miembro del Grupo de Ciencia e Ingeniería Computacional y Coordinador del Diplomado de Inteligencia Artificial Aplicada del CNS. Participa como responsable en México del consorcio WeNet de la Comunidad Europea y organiza la iniciativa de investigación CeMobili con investigadores del IDIAP Research Institute en Suiza.',
        showMore: false,
        image: salvador,
    },
    {
        id: 2,
        name: 'Viridiana del Carmen Robledo Valero',
        profession: 'Maestra en Salud Pública',
        text: 'Viridiana del Carmen Robledo-Valero es Licenciada en Ciencias Ambientales por la Universidad Autónoma de San Luis Potosí y Maestra en Salud Pública por el Instituto Nacional de Salud Pública (INSP, México). Actualmente es estudiante de doctorado del INSP y directora ejecutiva del You-i Lab. Se enfoca en administrar proyectos de salud pública que abordan problemas de salud ambiental y desarrollar plataformas digitales de vigilancia epidemiológica automatizada para la evaluación integrada de riesgos a la salud en comunidades mexicanas.',
        showMore: false,
        image: viridiana,
    },
    {
        id: 3,
        name: 'María de Lourdes Mendoza Flores',
        profession: 'Maestra en Salud Pública',
        text: 'Dedicada a la identificación de la distribución y determinantes de salud mediante metodología epidemiológica para la toma de decisiones.',
        showMore: false,
        image: lourdes,
    },
    {
        id: 4,
        name: 'Miguel Ángel Martínez Hernández',
        profession: 'Ingeniero en Telecomunicaciones',
        text: 'Miguel Angel Martinez-Hernandez, Ingeniero en Telecomunicaciones de la Universidad Autónoma de San Luis Potosí, es especialista en desarrollo web y Líder de Software en el Youth Innovation Laboratory (You-i Lab).',
        showMore: false,
        image: miguel,
    },
    {
        id: 5,
        name: 'Juan José Domínguez Pérez',
        profession: 'Ingeniero en Sistemas Inteligentes',
        text: 'Juan José Domínguez Pérez tiene el grado de Ingeniería de Sistemas Inteligentes por la Universidad Autónoma de San Luis Potosí. Es asociado de investigación y programador del You-i Lab del IPICYT.',
        showMore: false,
        image: juanjo,
    },
    // Agrega aquí los otros 19 elementos con su respectivo texto e imagen
];

export default dataDigital;

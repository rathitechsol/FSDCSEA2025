//console.log("JSObjects.js loaded");
const student={
    name:"ram",
    age:23,
    branch:"CSE-A",

    language:[{
        lang1:"C",
        lang2:"C++",
        lang3:"JavaScript",
    },
    {
        database1:"MySQL",
        database2:"MongoDB",
        database3:"Oracle",
    },
    {
        framework1:"Hibernate",
        framework2:"Spring",    }
]
}
console.log(student);
console.log(student.name);
console.log(student.language[0].lang3);
console.log(student.language[1].database2);
console.log(student.language[2].framework1);

delete student.age;
console.log(student);
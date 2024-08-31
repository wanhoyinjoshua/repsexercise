import { Equipment } from "./enums"

export const dictionary:any[]=
[
  {
    "filter":["beginner_task"],
    "label":"Sit to stand (beginner). It involves standing up from a chair and sitting down again.",
    "img":"/TASK/STS_a.png",
    "reps":20,
    "duration":319,
    "bodypart":"legs",
    "impairment":"strength",
    "aim":"improve ability to stand up",
    "difficulty":"beginner",
    "activity":"sit to stand",
    
    

    "videolink":"268313650",
    "equip":[{"label":Equipment.Chair, "link":""}],

    "equipment":"a chair",
    "id":0



  },
  {
    "filter":["advanced_task"],

    "label":"Sit to stand (advanced). It involves standing up from a chair and sitting down again.",
    "img":"/TASK/STS_b.png",
    "reps":44,
    "bodypart":"legs",
    "impairment":"strength",
    "aim":"improve ability to stand up",
    "difficulty":"advanced",
    "activity":"sit to stand",
    "equip":[{"label":Equipment.Chair, "link":""}],

    "videolink":"268313498",
    "equipment":"a chair",
    "duration":318,
    
    "id":1

    
  }
  ,
  {
    "filter":["beginner_task"],

    "label":"Stepping (beginner). It involves tapping your foot on the coloured circles of the TASK floormat.",
    "img":"/TASK/stepping_a.png",
    "reps":94,
    "bodypart":"legs",
    "aim":"This exercise aims to improve your single leg balance and will improve balance and walking",
    "impairment":"balance",
    "difficulty":"beginner",
    "activity":"walking",
    "equip":[{"label":Equipment.Chair, "link":""},{"label":Equipment.TaskMat, "link":""}],

    "videolink":"268313436",
    "duration":312,
    
    "equipment":""
    ,
    "id":2
    
  },
  
  { 
    "filter":["advanced_task"],
    "label":"Stepping (advanced). It involves tapping your foot on the coloured circles of the TASK floormat.",
    "img":"/TASK/stepping_b.png",
    "reps":105,
  "bodypart":"legs",
  "aim":"This exercise aims to improve your single leg balance and will improve balance and walking",
  "impairment":"balance",
  "difficulty":"advanced",
  "activity":"walking",
  "videolink":"268313376",
  "equip":[{"label":Equipment.Chair, "link":""},{"label":Equipment.TaskMat, "link":""}],

  "duration":323,
  "equipment":"",
  "id":3

}
  ,


 { 
    "filter":["beginner_task"],
    "label":"Step tap (beginner). It involves tapping your foot on a step whilst balancing with your other leg.",
    "img":"/TASK/step_tap_a.png",
    "reps":99,
    "bodypart":"legs",
    "aim":"improve balance and walking",
    "impairment":"balance",
    "difficulty":"beginner",
    "activity":"walking",
    "videolink":"268313312",
    "equip":[{"label":Equipment.Chair, "link":""},{"label":Equipment.TaskMat, "link":""},{"label":Equipment.StepBlock, "link":""}],

    "duration":318,
    "equipment":"a small block to step up to"
    ,
    "id":4
}
    ,
 {
    "filter":["advanced_task"],
"label":"Step tap (advanced). It involves tapping your foot on a step whilst balancing with your other leg.",
"img":"/TASK/step_tab_b.png",
"reps":107,
    "bodypart":"legs",
    "aim":"improve balance and walking",
    "impairment":"balance",
    "difficulty":"advanced",
    "activity":"walking",
    "videolink":"268313260",
    "duration":325,
    "equip":[{"label":Equipment.Chair, "link":""},{"label":Equipment.TaskMat, "link":""},{"label":Equipment.StepBlock, "link":""}],

    "equipment":"a small block to step up to"
    ,
    "id":5
  }
  ,

  {
    "filter":["beginner_task"],
    "label":"Stand and reach (beginner). This involves reaching towards a cup and moving it to different coloured circle on the TASK placemat.",
    "img":"/TASK/stand_reach_a.png",
"reps":55,

    "bodypart":"legs/arm",
    "aim":"improve ability to reach for objects while standing",
    "impairment":"balance",
    "difficulty":"beginner",
    "activity":"reaching in standing",
    "videolink":"268313197",
    "equipment":"a wall",
    "equip":[{"label":Equipment.Chair, "link":""},,{"label":Equipment.Wall, "link":""}],

    "duration":344,
    
    "id":6
  }
  
  
  ,
 {
    "filter":["advanced_task"],

    "label":"Stand and reach (advanced). It involves reaching towards a wall in multiple directions.",
    "img":"/TASK/stand_reach_b.png",
    "reps":67,


    "bodypart":"legs/arm",
    "aim":"improve ability to reach for objects while standing",
    "impairment":"balance",
    "difficulty":"advanced",
    "activity":"reaching in standing",
    "equip":[{"label":Equipment.Chair, "link":""},,{"label":Equipment.Wall, "link":""}],

    "videolink":"268313127",
    "duration":341,
    "equipment":"a wall"
    ,
    "id":7
  }
  
  
  ,
 {

    "filter":["beginner_task"],
    "label":"Sit and reach (beginner). It involves reaching towards a wall in multiple directions.",
    "img":"/TASK/sit_reach_a.png",
    "reps":55,


    "bodypart":"legs",
    "aim":"improve ability to sitting balance while reaching objects",
    "impairment":"balance",
    "difficulty":"beginner",
    "activity":"reaching in sitting",
    "videolink":"268313080",
    "duration":321,
    "equip":[{"label":Equipment.Chair, "link":""},,{"label":Equipment.Table, "link":""}],

    "equipment":"4-5 cups and a table"
    ,
    "id":8


  }
  
  ,
  {
    "filter":["advanced_task"],

    "label":"Sit and reach (advanced). This involves reaching towards a cup and moving it to different coloured circle on the TASK placemat.",
    "img":"/TASK/sit_reach_b.png",
    "reps":70,


    "bodypart":"legs",
    "aim":"improve ability to sitting balance while reaching objects",
    "impairment":"balance",
    "difficulty":"advanced",
    "activity":"reaching in sitting",
    "videolink":"268313022",
    "duration":365,
    "equip":[{"label":Equipment.Chair, "link":""},,{"label":Equipment.Table, "link":""}],

    "equipment":"4-5 cups and a table"
    ,
    "id":9



  },
 
  {
    "filter":["push"],
    "label":"Shoulder Push. To Improve your ability to move forward at the shoulder.",
    "reps":100,
    "img":"/PUSH/shoulder_push.png",

    "bodypart":"arms",
    "aim":"improve ability to move forward at the shoulder",
    "impairment":"strength",
    "difficulty":"beginner",
    "activity":"reaching",
    "videolink":"285448922",
    "duration":369,
    "equipment":"a table , mitten and a cup",
    "equip":[{"label":Equipment.ArmTable, "link":""},{"label":Equipment.Mitten, "link":""},{"label":Equipment.Chair, "link":""}],

    
    "id":10


  }
  
  
  ,
 {
    "filter":["push"],
    "img":"/PUSH/arm_push.png",
    "label":"Arm Push. To Improve your ability to move your arm forwards.",
    "reps":50,

    "bodypart":"arms",
    "aim":"improve ability to move your arm forward",
    "impairment":"strength",
    "difficulty":"beginner",
    "activity":"reaching",
    "videolink":"285448955",
    "duration":242,
    "equip":[{"label":Equipment.ArmTable, "link":""},{"label":Equipment.Mitten, "link":""},{"label":Equipment.Chair, "link":""}],

    "equipment":"a table , mitten and a cup"
    ,
    "id":11


  }
  
  ,

  {
    "filter":["push"],
    "label":"Elbow Straighten and out. To improve your ability to bend and straighten your elbow.",
    "reps":50,

    "img":"/PUSH/elbow_straighten.png",

    "bodypart":"arms",
    "aim":"improve ability to move your arm forward",
    "impairment":"strength",
    "difficulty":"beginner",
    "activity":"reaching",
    "videolink":"285448991",
    "duration":200,
    "equip":[{"label":Equipment.ArmTable, "link":""},{"label":Equipment.Chair, "link":""}],

    "equipment":"a table , mitten and a cup"
    ,
    "id":12


  }
  
  ,

  {
    "filter":["push"],
    "img":"/PUSH/vis_hand_movement.png",
    "label":"Visualising hand movement. To improve your ability to move your finger.",
    "reps":50,


    "bodypart":"arms",
    "aim":"improve ability to move your fingers",
    "impairment":"strength",
    "difficulty":"beginner",
    "activity":"reaching",
    "videolink":"285449022",
    "equipment":"a table",
    "equip":[{"label":Equipment.Table, "link":""},{"label":Equipment.Chair, "link":""}],

    "duration":313
    ,
    "id":13

    
  }
  
  ,
  {
    "filter":["push"],
    "img":"/PUSH/thumb_slide.png",
    "label":"Thumb Slide. To improve your ability to move your thumb.",
    "reps":50,
    "bodypart":"arms",
    "aim":"improve ability to move your fingers",
    "impairment":"strength",
    "difficulty":"beginner",
    "activity":"reaching",
    "videolink":"285449064",
    "equipment":"a table",
    "duration":180,
    "equip":[{"label":Equipment.ArmTable, "link":""},{"label":Equipment.Chair, "link":""}],

    
    "id":14


  }
  
  ,


  {
    "filter":["push"],

    "img":"/PUSH/hold_on_to_your_head.png",
    "label":"Hold on to your head. To improve your ability to move your shoulder.",
    "reps":20,
    
    "bodypart":"arms",
    "aim":"improve ability to move forward at the shoulder",
    "impairment":"strength",
    "difficulty":"beginner",
    "activity":"reaching",
    "videolink":"285449098",
    "equip":[{"label":Equipment.Bed, "link":""}],

    "equipment":"a bed"
    , "duration":551
    ,
    "id":15




  }
  
  ,
 {
    "filter":["push"],

    "img":"/PUSH/in_and_out.png",
    "label":"In and out. To improve your ability to move your shoulder."
    ,
    "reps":50,

    "bodypart":"arms",
    "aim":"improve ability to move forward at the shoulder",
    "impairment":"strength",
    "difficulty":"advanced",
    "activity":"reaching",
    "videolink":"120992262",
    "equipment":"a bed",
    "equip":[{"label":Equipment.Bed, "link":""}],
     "duration":250
    ,
    "id":16


  }
  
  
  



]
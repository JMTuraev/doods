import { ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import React from 'react'


export default function Design() {

    const teams=[

            {id:1, 
                people: {firstname:'John', surname:'Smith', url:'/user1.jpg'},
                skill: {id:1, name:'Senior designer', skillpoints:78, keyCompetency:'Information architecture'},
                categories:[
                    {id:1, name:'Visual design',  percent:27, },
                    {id:2, name:'Interaction design', percent:63},
                    {id:3, name:'Prototayping', percent:95},
                    {id:4, name:'User research',  percent:50},
                ],
                goals:[
                    {id:1, category:'article', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:true },
                    {id:2, category:'video', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:true },
                    {id:3, category:'course', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:false },
                    {id:4, category:'article', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:false },
                ]
            },
            {id:2, 
                people: {firstname:'Zara', surname:'Isabelle', url:'/user11.jpg'},
                skill: {id:1, name:'Senior designer', skillpoints:78, keyCompetency:'information architecture'},
                categories:[
                    {id:1, name:'Visual design',  percent:71},
                    {id:2, name:'Interaction design', percent:31},
                    {id:3, name:'Prototayping', percent:80},
                    {id:4, name:'User research',  percent:95},
                ],
                goals:[
                    {id:1, category:'article', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:true },
                    {id:2, category:'video', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:true },
                    {id:3, category:'article', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:false },
                    {id:4, category:'article', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:false },
                ]
            },
            {id:3, 
                people: {firstname:'Park', surname:'Kim', url:'/user10.jpg'},
                skill: {id:1, name:'Senior designer', skillpoints:78, keyCompetency:'information architecture'},
                categories:[
                    {id:1, name:'Visual design',  percent:90},
                    {id:2, name:'Interaction design', percent:18},
                    {id:3, name:'Prototayping', percent:65},
                    {id:4, name:'User research',  percent:80},
                ],
                goals:[
                    {id:1, category:'article', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:false },
                    {id:2, category:'course', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:true },
                    {id:3, category:'course', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:true },
                    {id:4, category:'article', date:'03/27', header:'10 design rules you must never break', text:'some text in here. maybe anything', active:false },
                ]
            },
        
    ]
  return (
    <div className='flex flex-col '>
        {teams.map((item, idx)=>{
            const onCategoires=(categories)=>{
                const percents=categories.map(item=>item.percent)
                const minResult= Math.min(...percents);

                return categories.map((item, idx)=>(
                  
                        <div className='' key={idx}>
                            <div className={` ${item.percent===minResult  && 'font-bold '} text-sm pt-2 pb-1`}>{item.name}</div>
                            <div className={`  ${item.percent===minResult   ?'bg-cyan-100' : 'bg-orange-100'}   w-full rounded-full h-0.5 `}>
                        <div className={`${item.percent===minResult   ?'bg-cyan-400' : 'bg-orange-300'}  h-0.5 rounded-full"`} style={{'width': item.percent}}></div>
                    </div>
                    </div>
                ))
            }

            const onGoals=(goals)=>{
               

                const ActiveGoals=()=>{
                
                    let activeGoalsArr=goals.filter(item=>item.active===true)
                    return activeGoalsArr.map((item, idx)=>{
                        let badgeColor
                        switch (item.category) {
                            case 'article':
                                badgeColor='bg-blue-100 text-blue-400 '
                                break;
                         case 'course':
                                badgeColor='bg-green-100 text-green-400'
                                break;
                                case 'video':
                                badgeColor='bg-orange-100 text-orange-400'
                                break;
                        
                            default:
                                break;
                        }
                         
                        return(
                            <div className='flex w-72   ' key={idx}>
                                
                                <div className=' space-y-1 border max-h-min p-4 m-4 shadow-sm bg-neutral-50 '>
                                    <div className='relative flex text-gray-400 text-sm'>
                                    <span className={`${badgeColor}  font-bold uppercase inline-flex items-center rounded-full  px-2.5 py-0.5 text-xs `}>{item.category}</span>
                                        <div className='absolute right-0 flex font-medium '>
                                            <ClockIcon className='w-5 h-5 mr-1'/>
                                            <div className=' text-right'>{item.date}</div>
                                        </div>
                                    </div>
                                    <div className='font-bold text-gray-600'>{item.header}</div>
                                    <div className='text-sm'>{item.text}</div>
                                </div>
                            </div>
                        )
                    }
                    )

                }
                const AchievedGoals=()=>{
                    let achievedGoalsArr=goals.filter(item=>item.active===false) 
                    return (
                        achievedGoalsArr.map((item, idx)=>(
                            <div className='flex w-72   ' key={idx}>    
                                <div className=' space-y-1 border max-h-min p-4 m-4 shadow-sm bg-neutral-50 '>
                                    <div className='relative flex text-gray-400 text-sm'>
                                    <span className={`  font-bold uppercase inline-flex items-center rounded-full  px-2.5 py-0.5 text-xs `}>{item.category}</span>
                                        <div className='absolute right-0 flex font-medium '>
                                            <ClockIcon className='w-5 h-5 mr-1'/>
                                            <div className=' text-right'>{item.date}</div>
                                        </div>
                                    </div>
                                    <div className='font-bold text-gray-600'>{item.header}</div>
                                    <div className='text-sm'>{item.text}</div>
                                </div>
                            </div>
                        )
                    )
                )
                }
                return (
                    <div  className='flex mt-4 overflow-x-auto '>
                    <div className=''>
                       
                        <h1 className='uppercase whitespace-nowrap pl-4 text-gray-600 font-medium'>active goals</h1>
                        <div className='flex'><ActiveGoals/></div>
                        
                    </div>
                    <div className=''>
                    <h1 className='uppercase whitespace-nowrap pl-4 text-gray-600 font-medium'>Achieved Goals</h1>
                        <div className='flex'><AchievedGoals/></div>
                    </div>
                    
                    </div>
                )
            }
            return(
                <div className='flex border-b-2 h-56' key={idx}>

                    
          
                    <div className='flex p-4 min-w-max '>
                        <div className='  px-8 '>
                            <div className='font-bold text-2xl text-gray-600 text-center'>{item.people.firstname +' ' +  item.people.surname[0] + '.' }</div>
                            <div className='text-center text-xs text-gray-500 pb-4'>{item.skill.name }</div>
           

                            <Image width={102} height={102}  src={item.people.url}  alt='user image'  className="inline-block    rounded-full  ring-2 ring-cyan-500 ring-offset-2"/>
                            <div className='text-center text-sm text-gray-500 pt-2'><span className='font-bold'>{item.skill.skillpoints }</span> skillpoints </div>
                        </div>
                        <div className='px-4'>

                                <div className='text-sm text-gray-500 font-medium'>Key competency</div>
                                <div className='text-sm font-bold text-gray-600'>{item.skill.keyCompetency}</div>
                                <div>{onCategoires(item.categories)}</div>
                        </div>

                    </div>
                    <div className='flex flex-1 bg-neutral-100'>
                    <div className='flex  '>{onGoals(item.goals)}</div>
                        
                    </div>
                </div>
            )
        })}
    </div>
  )
}

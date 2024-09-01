import { CheckCircleIcon, XMarkIcon,XCircleIcon } from '@heroicons/react/20/solid'

export default function AlertMsg(props:{status:boolean}) {
  return (
    <div className={`rounded-md ${props.status==true?"bg-green-50":"bg-red-50"} p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
         {props.status==true?<CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />:<XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />} 
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
          {props.status==true?"Success":"Failed, try again!"} 
          </p>
        </div>
        
      </div>
    </div>
  )
}
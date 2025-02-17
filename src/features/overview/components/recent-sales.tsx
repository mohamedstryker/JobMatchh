import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

export function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Job Applications</CardTitle>
        <CardDescription>You Applied for 23 Job this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          <div className='flex items-center'>
            <Avatar className='h-9 w-9'>
              <AvatarImage
                src='https://i.ibb.co/0knHSvz/image.png'
                alt='Avatar'
              />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>Ahmed Adel</p>
              <p className='text-sm text-muted-foreground'>
              ahmed.adelHR@microsoft.com
              </p>
            </div>
            <div className='ml-auto font-medium'>Waiting ⌛</div>
          </div>
          <div className='flex items-center'>
            <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
              <AvatarImage
                src='https://i.ibb.co/M52CjVfk/1.png'
                alt='Avatar'
              />
              <AvatarFallback>YA</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>Youssef Ahmed</p>
              <p className='text-sm text-muted-foreground'>
              youssef.ahmed@googlehr.com
              </p>
            </div>
            <div className='ml-auto font-medium'>Waiting ⌛</div>
          </div>
          <div className='flex items-center'>
            <Avatar className='h-9 w-9'>
              <AvatarImage
                src='https://i.ibb.co/dJJjxbXJ/2.png'
                alt='Avatar'
              />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>
                Isabella Nguyen
              </p>
              <p className='text-sm text-muted-foreground'>
                isabella.nguyen@email.com
              </p>
            </div>
            <div className='ml-auto font-medium'>Rejected ❌</div>
          </div>
          <div className='flex items-center'>
            <Avatar className='h-9 w-9'>
              <AvatarImage
                src='https://i.ibb.co/VcvPHyh2/3.png'
                alt='Avatar'
              />
              <AvatarFallback>HK</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>Hazzem Khaled</p>
              <p className='text-sm text-muted-foreground'>hazem@kpmg.com</p>
            </div>
            <div className='ml-auto font-medium'>Accepted ✅ & Waiting Interview  </div>
          </div>
          <div className='flex items-center'>
            <Avatar className='h-9 w-9'>
              <AvatarImage
                src='https://api.slingacademy.com/public/sample-users/5.png'
                alt='Avatar'
              />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>Sofia Davis</p>
              <p className='text-sm text-muted-foreground'>
                sofia.davis@email.com
              </p>
            </div>
            <div className='ml-auto font-medium'>Accepted ✅</div>
          </div>
        </div>
      </CardContent>  
    </Card>
  );
}

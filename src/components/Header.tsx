import NavigationLink from "./NavigationLink";



export default function Header() {



   return (
      <header className="min-h-screen mobile:hidden z-50">
         <nav className="min-h-screen w-full sticky top-0 bottom-0 overflow-hidden">
            <div>
               <div className="min-h-screen w-full px-5 text-[3rem] flex justify-end">
                  <div className="space-y-20 flex flex-col items-end justify-center font-[evance]">
                     <NavigationLink href='/'>
                        Home
                     </NavigationLink>
                     <NavigationLink href='/about'>
                        About
                     </NavigationLink>
                     <NavigationLink href='/projects'>
                        Projects
                     </NavigationLink>
                  </div>
               </div>
               <div className="fixed bottom-0 right-5">
               </div>
            </div>
         </nav>
      </header>
   )
}
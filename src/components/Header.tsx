import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";



export default function Header() {



   return (
      <header className="min-h-screen desktop:fixed top-0 right-0 w-[20vw] mobile:hidden z-50">
         <nav className="h-full w-full">
            <div>
               <div className="min-h-screen w-full px-2 text-[3rem] flex justify-end">
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
                  <LocaleSwitcher />
               </div>
            </div>
         </nav>
      </header>
   )
}
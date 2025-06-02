"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Mis NFTs", href: "/my-nfts" },
  { name: "Centros de Reciclaje", href: "/recycling-centers" },
  { name: "Recompensas", href: "/rewards" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              ReCircle
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === item.href && "bg-primary text-primary-foreground"
                      )}
                    >
                      <Link href={item.href}>
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="relative ml-4">
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  mounted,
                }) => {
                  return (
                    <div className="flex items-center gap-2">
                      {(() => {
                        if (!mounted || !account || !chain) {
                          return (
                            <button
                              onClick={openConnectModal}
                              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                            >
                              Conectar Wallet
                            </button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <button
                              onClick={openChainModal}
                              className="rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90"
                            >
                              Red incorrecta
                            </button>
                          );
                        }

                        return (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={openChainModal}
                              className="flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
                            >
                              {chain.hasIcon && (
                                <div className="h-4 w-4">
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? "Chain icon"}
                                      src={chain.iconUrl}
                                      className="h-4 w-4"
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>

                            <button
                              onClick={openAccountModal}
                              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                            >
                              {account.displayName}
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 
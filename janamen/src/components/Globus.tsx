import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import { GrLanguage } from 'react-icons/gr'


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Globus() {
    const t = useTranslations();



    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center  text-2xl font-semibold text-white ">
                    <GrLanguage />


                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        {({ focus }) => (
                            <Link href="/en"
                                locale="en"

                                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                            >
                                {/* {t('header.globus.english')} */}
                                English
                            </Link>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ focus }) => (
                            <Link href="/kz"
                                locale="kz"

                                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                            >
                                {/* {t('header.globus.kazakh')} */}
                                Қазақша
                            </Link>
                        )}
                    </MenuItem>                    <MenuItem>
                        {({ focus }) => (
                            <Link href="/ru"
                                locale="ru"

                                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                            >
                                {/* {t('header.globus.english')} */}
                                Русский
                            </Link>
                        )}
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}

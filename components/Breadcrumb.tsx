import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">خانه</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator  />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">پروفایل</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator  />
        <BreadcrumbItem>
          <BreadcrumbPage>تست</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

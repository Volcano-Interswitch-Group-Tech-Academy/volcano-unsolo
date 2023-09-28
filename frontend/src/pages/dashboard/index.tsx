import DashboardLayout from '@/components/common/layout/DashboardLayout'
import BlogForm from '@/components/modules/Dashboard/Home/BlogForm'
import Card from '@/components/modules/Dashboard/Home/Card'
import UploadWidget from '@/components/modules/Dashboard/UploadWidget'
import React from 'react'

const index = () => {
  return (
   <DashboardLayout>
      <Card/>
      <BlogForm/>
    </DashboardLayout>   
  )
}

export default index
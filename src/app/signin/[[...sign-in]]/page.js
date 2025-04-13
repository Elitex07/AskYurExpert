import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SignIn 
        appearance={{
          elements: {
            footer: {
              display: 'none',
            },
          },
          layout: {
            socialButtonsPlacement: 'top',
            socialButtonsVariant: 'blockButton',
          },
          variables: {
            colorPrimary: '#212529',
            colorText: '#384347',
          },
        }}
      />
    </div>
  )
}
import DashLayout from "../../components/DashLayout/dashLayout"

export default function DashLay({children}: Readonly<{
    children: React.ReactNode;
  }>){
return(
    <html>
      <body  >
        <div className="flex ">
        <DashLayout></DashLayout>
        <main>{children}</main>
        </div>
      </body>
    </html>
)
}
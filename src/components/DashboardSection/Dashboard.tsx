import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { TrendingUp } from "lucide-react";
import BarChart from "../BarChart";

const Dashboard = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-8 md:flex-row">
        <Card>
          <CardHeader>
            <CardTitle>Gráfico de receitas</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <BarChart />
          </CardContent>
        </Card>

        <Card className="h-[20.9rem]">
          <CardHeader>
            <CardTitle>Histório de transações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between py-3 px-3 rounded-sm bg-colorSystem-lightPurple text-colorSystem-brandColor mb-6">
              <span>Ontem</span>
              <span>R$-540,32</span>
            </div>

            <div className="flex justify-between py-3 px-3 rounded-sm bg-colorSystem-lightPurple text-colorSystem-brandColor mb-6">
              <span>Quinta-Feira</span>
              <span>R$-273,90</span>
            </div>

            <div className="flex justify-between py-3 px-3 rounded-sm bg-colorSystem-lightPurple text-colorSystem-brandColor mb-6">
              <span>Segunda-Feira</span>
              <span>R$-1.456,20</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <Card className="h-[9.375rem]">
          <CardHeader className="pb-1">
            <CardTitle className="text-base">Total de vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-2xl">R$ 3.265,21</p>
          </CardContent>
          <CardFooter>
            <Badge variant="success">
              <TrendingUp size={18} />
              <span>+ 11%</span>
            </Badge>
          </CardFooter>
        </Card>
        <Card className="h-[9.375rem]">
          <CardHeader className="pb-1">
            <CardTitle className="text-base">Total liquido</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-2xl">R$ 2.825,58</p>
          </CardContent>
          <CardFooter>
            <Badge variant="success">
              <TrendingUp size={18} />
              <span>+ 15%</span>
            </Badge>
          </CardFooter>
        </Card>
        <Card className="h-[9.375rem]">
          <CardHeader className="pb-1">
            <CardTitle className="text-base">Compras canceladas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-2xl">R$ 130,00</p>
          </CardContent>
          <CardFooter>
            <Badge variant="destructive">
              <TrendingUp size={18} />
              <span>- 80%</span>
            </Badge>
          </CardFooter>
        </Card>
        <Card className="h-[9.375rem]">
          <CardHeader className="pb-1">
            <CardTitle className="text-base">Reembolsos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-2xl">R$ 345,00</p>
          </CardContent>
          <CardFooter>
            <Badge variant="destructive">
              <TrendingUp size={18} />
              <span>- 80%</span>
            </Badge>
          </CardFooter>
        </Card>
      </div>

      {/* history Table */}
      <div>
        <Card className="h-[18rem] max-[600px]:w-[700px] w-full">
          <CardHeader>
            <CardTitle>Histórico de compradores</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="max-[600px]:w-[800px] w-full overflow-scroll">
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Localização</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Situação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#12345</TableCell>
                  <TableCell>02/08/2023</TableCell>
                  <TableCell>Roberto Santos</TableCell>
                  <TableCell>Rio Grande do Sul</TableCell>
                  <TableCell>R$ 15,00</TableCell>
                  <TableCell>
                    <span className="inline-flex rounded-full h-2 w-2 mr-1.5 bg-colorSystem-support02"></span>
                    Aprovado
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#54321</TableCell>
                  <TableCell>12/02/2023</TableCell>
                  <TableCell>Ana Almeida</TableCell>
                  <TableCell>Brasília</TableCell>
                  <TableCell>R$ 40,00</TableCell>
                  <TableCell>
                    <span className="inline-flex rounded-full h-2 w-2 mr-1.5 bg-colorSystem-support03"></span>
                    Em análise
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

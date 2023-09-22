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

const Dashboard = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-8 md:flex-row">
        <Card className="h-[20.9rem]">
          <CardHeader>
            <CardTitle>Card 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content</p>
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
        <Card className="h-[18rem]">
          <CardHeader>
            <CardTitle>Histórico de compradores</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
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
                  <TableCell>Aprovado</TableCell>
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

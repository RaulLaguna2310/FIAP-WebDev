"use client";
import { useState } from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import StatsGrid from "./components/StatsGrid";
import DataTable from "./components/DataTable";

export default function Home() {
  const [user] = useState({
    name: "Raul",
    email: "gmail@gmail.com",
    age: 18,
    avatar: "https://avatars.githubusercontent.com/u/160126307?s=400&u=cec199ae84721a840c8268a3b3935b056055a16b&v=4",
  });

  const [stats] = useState([
    { label: "Vendas", value: "R$ 12.500", change: "+15%", color: "green" },
    { label: "Usuários", value: "1.234", change: "+8%", color: "blue" },
    { label: "Pedidos", value: "89", change: "+23%", color: "purple" },
    { label: "Receita", value: "R$ 45.200", change: "+12%", color: "orange" },
  ]);

  const [recentOrders] = useState([
    {
      id: 1,
      customer: "Maria Santos",
      amount: "R$ 150",
      status: "Entregue",
      acao: "Editar",
    },
    {
      id: 2,
      customer: "Pedro Costa",
      amount: "R$ 89",
      status: "Em trânsito",
      acao: "Editar",
    },
    {
      id: 3,
      customer: "Ana Lima",
      amount: "R$ 320",
      status: "Processando",
      acao: "Editar",
    },
    {
      id: 4,
      customer: "Ana Silva",
      amount: "R$ 320",
      status: "Processando",
      acao: "Editar",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Dashboard">
        <UserProfile user={user} />
      </Header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsGrid stats={stats} />

        <DataTable
          title="Pedidos Recentes"
          columns={["ID", "Cliente", "Valor", "Status", "Acoes"]}
          data={recentOrders}
        />
      </main>
      d
    </div>
  );
}

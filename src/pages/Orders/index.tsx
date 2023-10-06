import OrderTable from './components/OrderTable';
import OrderList from './components/OrderList';

import InnerLayout from '../../layouts/InnerLayout';

export default function Orders() {
  return (
    <InnerLayout>
      <OrderTable />
      <OrderList />
    </InnerLayout>
  );
}

import { BrokerageInterface } from 'interfaces/brokerage';
import { GetQueryInterface } from 'interfaces';

export interface PropertyInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  brokerage_id?: string;
  created_at?: any;
  updated_at?: any;

  brokerage?: BrokerageInterface;
  _count?: {};
}

export interface PropertyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  brokerage_id?: string;
}

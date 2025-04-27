// Nodes
export interface NodeData {
  id: string;
  component_key: string;
  component_type: 'form' | 'branch' | 'trigger' | 'configuration';
  component_id: string;
  name: string;
  prerequisites: string[] | null;
  permitted_roles: string[] | null;
  input_mapping: Record<string, string>;
  sla_duration: {
    number: number;
    unit: 'minutes' | 'hours' | 'days';
  }
  approvalRequired: boolean;
  approval_roles: string[] | null;
}

export interface Node {
  id: string;
  type: 'form' | 'branch' | 'trigger' | 'configuration';
  position: {
    x: number;
    y: number;
  };
  data: NodeData;
}

// Edges
export interface Edge {
  source: string;
  target: string;
}

// Forms
export interface FormFieldProperty {
  avantos_type: string;
  title?: string;
  type: string;
  items?: object;
  uniqueItems?: boolean;
  enum?: string | null;
  format?: string;
}

export interface UIElement {
  type: 'Button' | 'Control';
  scope: string;
  label: string;
  options?: Record<string, string>;
}

export interface Form {
  id: string;
  name: string;
  description: string;
  is_reusable: boolean;
  field_schema: {
    type: object;
    properties: Record<string, FormFieldProperty>;
    required: string[];
  }
  ui_schema: {
    type: 'VerticalLayout' | 'HorizontalLayout';
    elements: UIElement[];
  }
  dynamic_field_config: Record<string, {
    selector_field: string;
    payload_fields: {
      userId: {
        type: string;
        value: string;
      }
    };
    endpoint_id: string;
  }>
}

// Graph Data for whole action blueprint
export interface GraphData {
  $schema: string;
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  category: string;
  nodes: Node[];
  edges: Edge[];
  forms: Form[];
  branches: object[] | null;
  triggers: object[] | null;
}




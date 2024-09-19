Here’s a comprehensive list of all endpoints for the food delivery system:

### **User Service**

- **POST** `/api/v1/users/register`
- **POST** `/api/v1/users/login`
- **GET** `/api/v1/users/{userId}`
- **PUT** `/api/v1/users/{userId}`

### **Restaurant Service**

- **POST** `/api/v1/restaurants`
- **GET** `/api/v1/restaurants/{restaurantId}`
- **PUT** `/api/v1/restaurants/{restaurantId}`
- **POST** `/api/v1/restaurants/{restaurantId}/menu`
- **PUT** `/api/v1/restaurants/{restaurantId}/menu/{itemId}`
- **DELETE** `/api/v1/restaurants/{restaurantId}/menu/{itemId}`

### **Order Service**

- **POST** `/api/v1/orders`
- **GET** `/api/v1/orders/{orderId}`
- **PUT** `/api/v1/orders/{orderId}/cancel`
- **PUT** `/api/v1/orders/{orderId}/status`

### **Payment Service**

- **POST** `/api/v1/payments`
- **GET** `/api/v1/payments/{paymentId}`
- **PUT** `/api/v1/payments/{paymentId}/refund`

### **Notification Service**

- **POST** `/api/v1/notifications`
- **GET** `/api/v1/notifications/{userId}`

### **Delivery Service**

- **GET** `/api/v1/delivery/agents`
- **POST** `/api/v1/delivery/assign`
- **GET** `/api/v1/delivery/{orderId}/track`
- **PUT** `/api/v1/delivery/{orderId}/status`

### **Review/Rating Service**

- **POST** `/api/v1/reviews/restaurant`
- **GET** `/api/v1/reviews/restaurant/{restaurantId}`
- **POST** `/api/v1/reviews/delivery`
- **GET** `/api/v1/reviews/delivery/{agentId}`

### **Search Service**

- **GET** `/api/v1/search/restaurants`
- **GET** `/api/v1/search/menu`

### **Inventory Service**

- **GET** `/api/v1/restaurants/{restaurantId}/inventory`
- **PUT** `/api/v1/restaurants/{restaurantId}/inventory`

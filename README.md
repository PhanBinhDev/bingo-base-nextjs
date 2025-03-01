# Bingo Template Nextjs 15

## Giới thiệu

Bingo Template là một template Next.js 15 được thiết lập sẵn với các công cụ hỗ trợ phát triển như ESLint, Prettier, Husky, Commitlint, TailwindCSS và TypeScript.

## Cài đặt

1. Clone repository:
   ```sh
   git clone https://github.com/PhanBinhDev/bingo-base-nextjs
   cd app-clone
   ```
2. Cài đặt dependencies:
   ```sh
   npm install
   ```


## Scripts

- `npm run dev` - Chạy server phát triển
- `npm run build` - Build production
- `npm run start` - Chạy production server
- `npm run lint` - Kiểm tra lint với ESLint
- `npm run lint:fix` - Fix các lỗi ESLint
- `npm run type-check` - Kiểm tra lỗi TypeScript
- `npm run format` - Format code với Prettier
- `npm run prepare` - Cài đặt Husky

## Cấu hình

### 1. ESLint

ESLint được sử dụng để kiểm tra code theo tiêu chuẩn, cấu hình bao gồm:

- `eslint-config-next`: Hỗ trợ Next.js
- `eslint-config-prettier`: Tích hợp với Prettier
- `eslint-plugin-import`: Kiểm tra import/export
- `eslint-plugin-playwright`: Hỗ trợ Playwright
- `eslint-plugin-prettier`: Kiểm tra định dạng với Prettier
- `eslint-plugin-simple-import-sort`: Tự động sắp xếp import
- `eslint-plugin-unicorn`: Tăng cường best practices

Chạy ESLint:

```sh
npm run lint
npm run lint:fix # Fix lỗi tự động
```

### 2. Prettier

Prettier được sử dụng để định dạng code thống nhất, hỗ trợ TailwindCSS:

```sh
npm run format
```

### 3. Commitizen & Commitlint

Chuẩn hóa commit message theo Conventional Commits:

- `commitizen` giúp tạo commit message dễ dàng
- `commitlint` kiểm tra format commit

Cách sử dụng:

```sh
npx git-cz
```

### 4. Husky

Husky giúp tự động chạy kiểm tra trước khi commit:

- Chạy ESLint trước khi commit
- Kiểm tra format commit

Cài đặt Husky:

```sh
npm run prepare
```

## Công nghệ sử dụng

- **Next.js 15**: Framework React mạnh mẽ
- **React 19**: Phiên bản mới nhất
- **TypeScript**: Kiểm tra kiểu tĩnh
- **TailwindCSS**: Styling nhanh chóng
- **ESLint & Prettier**: Định dạng và kiểm tra code

## License

MIT


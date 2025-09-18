import './App.css';

// 분리된 리액트컴포넌트 import
import Menuitems from './ui/Mentultems';
import AppRoutes from './routes/AppRoutes';

function App() {
  const appName = "IT Academy Coffee Shop";

  return (
    <>
      <Menuitems appName={appName} />

      {/* 분리된 라우터 정보 */}
      <AppRoutes />

      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p>&copy; 2025 {appName}. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

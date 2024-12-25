      {/* Tabs Buttons */}
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`px-4 py-2 text-lg font-semibold ${
            activeTab === "fullstack"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("fullstack")}
        >
          Fullstack Development
        </button>
        <button
          className={`px-4 py-2 text-lg font-semibold ${
            activeTab === "mobile"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("mobile")}
        >
          Mobile Development
        </button>
        <button
          className={`px-4 py-2 text-lg font-semibold ${
            activeTab === "uiux"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("uiux")}
        >
          UI/UX Design
        </button>
      </div>

      {/* Tabs Content */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        {activeTab === "fullstack" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Fullstack Development</h2>
            <p className="text-gray-700">
              Building complete web applications using technologies like
              Next.js, Node.js, and MongoDB.
            </p>
          </div>
        )}
        {activeTab === "mobile" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Mobile Development</h2>
            <p className="text-gray-700">
              Creating mobile applications using React Native with smooth user
              experiences.
            </p>
          </div>
        )}
        {activeTab === "uiux" && (
          <div>
            <h2 className="text-xl font-bold mb-2">UI/UX Design</h2>
            <p className="text-gray-700">
              Designing intuitive user interfaces with tools like Figma and
              Adobe XD.
            </p>
          </div>
        )}
      </div>
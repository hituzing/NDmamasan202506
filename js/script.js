// メンバーデータ
const members = [
    {
        id: 'kawai_miki',
        name: '河合 未希',
        position: '主任',
        familyInfo: '主人・長女（7歳）次女（3歳）長男（1歳）私の5人家族',
        photoUrl: 'images/kawai_miki.jpg'
    },
    {
        id: 'kawamura_naoko',
        name: '川村 奈緒子',
        position: '主任',
        familyInfo: '主人、双子の長女（2歳）、次男（2歳）、私の4人家族',
        photoUrl: 'images/kawamura_naoko.jpg'
    },
    {
        id: 'hayashi_keiko',
        name: '林 桂子',
        position: '主任',
        familyInfo: '主人・長女（19歳）長男（16歳）次男（7歳）私の5人家族',
        photoUrl: 'images/hayashi_keiko.jpg'
    },
    {
        id: 'pham_thi_huong',
        name: 'ファム ティフーン',
        position: 'メンバー',
        familyInfo: '主人、長女（1歳）、私の3人家族',
        photoUrl: 'images/pham_thi_huong.jpg'
    },
    {
        id: 'agawa_sumire',
        name: '阿川 すみれ',
        position: 'メンバー',
        familyInfo: '主人、長男（おなかの中）、私の3人家族',
        photoUrl: 'images/agawa_sumire.jpg'
    }
];

// 活動報告データ
const reports = [
    {
        id: 'report_001',
        date: '2025-06-11',
        title: '第一回ママさん会（キックオフ）',
        content: `■目的：ママさんが「働きやすい環境」で活躍できるよう、課題を共有し、今後の方向性を話し合う。

■主な議題：
1. 開会のあいさつ
2. 本日の会の意義とゴールの共有
3. 山本執行役員より挨拶
4. 自己紹介（名前、所属、簡単な家庭状況）
5. 発足の背景・本会の目的（ゴール）・スケジュール
6. 予算について
7. 次回の会議について

■参加者：河合主任、林主任、ファムさん、阿川さん、川村
■司会：河合主任
■議事録担当：川村`,
        author: '川村 奈緒子'
    },
    {
        id: 'report_002',
        date: '2025-06-25',
        title: '働き方に関するアンケート結果',
        content: `■アンケート概要：
メンバー全員を対象に、現在の働き方に関する課題や改善希望について調査を実施しました。

■主な結果：
1. 時短勤務制度の活用状況
   - 現在利用中：80%
   - 今後利用希望：20%

2. 在宅勤務について
   - 週1-2回希望：60%
   - 週3回以上希望：40%

3. 子育て支援制度への要望
   - 病児保育の充実：100%
   - 学校行事参加のための特別休暇：80%
   - 育児相談窓口の設置：60%

■今後のアクション：
上記結果を踏まえ、具体的な改善提案を検討していきます。`,
        author: '河合 未希'
    }
];

// 予定データ
const schedules = [
    {
        id: 'schedule_001',
        date: '2025-07-15',
        title: '第二回ママさん会',
        description: '前回の振り返りと今後の活動計画について話し合います',
        time: '14:00-15:30',
        location: 'オンライン'
    },
    {
        id: 'schedule_002',
        date: '2025-08-20',
        title: '働き方改善提案検討会',
        description: '具体的な働き方改善案を検討し、提案書を作成します',
        time: '13:30-16:00',
        location: '会議室A'
    },
    {
        id: 'schedule_003',
        date: '2025-09-10',
        title: '子育て支援制度説明会',
        description: '新しい子育て支援制度について詳しく説明します',
        time: '15:00-16:00',
        location: 'オンライン'
    }
];

// DOM要素
const membersGrid = document.getElementById('membersGrid');
const reportsContainer = document.getElementById('reportsContainer');
const addReportBtn = document.getElementById('addReportBtn');
const scheduleContainer = document.getElementById('scheduleContainer');
const addScheduleBtn = document.getElementById('addScheduleBtn');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');
const closeMobileMenu = document.getElementById('closeMobileMenu');

// メンバー管理クラス
class MemberManager {
    static displayMembers() {
        membersGrid.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100';
            
            // デフォルトのアバター画像（SVG）
            const defaultAvatar = `data:image/svg+xml;base64,${btoa(`
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="120" fill="#F3F4F6"/>
                    <circle cx="60" cy="40" r="16" fill="#9B9BA3"/>
                    <path d="M24 96C24 81.9086 35.9086 70 50 70H70C84.0914 70 96 81.9086 96 96V120H24V96Z" fill="#9B9BA3"/>
                </svg>
            `)}`;

            memberCard.innerHTML = `
                <div class="text-center">
                    <div class="mb-4">
                        <img src="${member.photoUrl}" alt="${member.name}さんの写真" 
                             class="profile-image w-24 h-24 object-cover rounded-full mx-auto border-4 border-pink-200 shadow-md"
                             onerror="this.src='${defaultAvatar}'; this.classList.add('default-avatar');"
                             loading="lazy">
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">${member.name}</h3>
                    <p class="text-pink-600 font-medium mb-3">${member.position}</p>
                    <div class="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        <p class="font-medium mb-1">家族構成：</p>
                        <p>${member.familyInfo}</p>
                    </div>
                </div>
            `;
            
            memberCard.addEventListener('click', () => {
                UIManager.showMemberDetail(member);
            });
            
            // ホバーエフェクトの追加
            memberCard.addEventListener('mouseenter', () => {
                memberCard.style.transform = 'translateY(-4px)';
            });
            
            memberCard.addEventListener('mouseleave', () => {
                memberCard.style.transform = 'translateY(0)';
            });
            
            membersGrid.appendChild(memberCard);
        });
    }
}

// 活動報告管理クラス
class ReportManager {
    static displayReports() {
        reportsContainer.innerHTML = '';
        
        // 日付順でソート（新しい順）
        const sortedReports = [...reports].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        sortedReports.forEach(report => {
            const reportCard = document.createElement('div');
            reportCard.className = 'report-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100';
            reportCard.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">${report.title}</h3>
                        <div class="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span class="flex items-center">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"></path>
                                </svg>
                                ${new Date(report.date).toLocaleDateString('ja-JP')}
                            </span>
                            <span class="flex items-center">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                ${report.author}
                            </span>
                        </div>
                    </div>
                    <button class="view-report-btn text-pink-600 hover:text-pink-800 font-medium text-sm" data-report-id="${report.id}">
                        詳細を見る
                    </button>
                </div>
                <div class="text-gray-600">
                    <p class="line-clamp-3">${report.content.substring(0, 150)}...</p>
                </div>
            `;
            
            // 詳細表示ボタンのイベントリスナー
            const viewBtn = reportCard.querySelector('.view-report-btn');
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                UIManager.showReportDetail(report);
            });
            
            reportsContainer.appendChild(reportCard);
        });
    }

    static addReport(reportData) {
        const newReport = {
            id: `report_${Date.now()}`,
            date: reportData.date,
            title: reportData.title,
            content: reportData.content,
            author: reportData.author
        };
        
        reports.unshift(newReport);
        localStorage.setItem('reports', JSON.stringify(reports));
        ReportManager.displayReports();
        UIManager.showNotification('新しい活動報告が追加されました', 'success');
    }
}

// 予定管理クラス
class ScheduleManager {
    static displaySchedules() {
        scheduleContainer.innerHTML = '';
        
        // 日付順でソート（近い順）
        const sortedSchedules = [...schedules].sort((a, b) => new Date(a.date) - new Date(b.date));
        
        sortedSchedules.forEach(schedule => {
            const scheduleCard = document.createElement('div');
            const scheduleDate = new Date(schedule.date);
            const today = new Date();
            const isPast = scheduleDate < today;
            
            scheduleCard.className = `schedule-card p-4 rounded-lg border-l-4 ${
                isPast ? 'bg-gray-50 border-gray-300' : 'bg-blue-50 border-blue-400'
            } hover:shadow-md transition-shadow duration-300`;
            
            scheduleCard.innerHTML = `
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3 mb-2">
                            <h3 class="text-lg font-semibold ${isPast ? 'text-gray-600' : 'text-gray-800'}">${schedule.title}</h3>
                            ${isPast ? '<span class="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">終了</span>' : '<span class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">予定</span>'}
                        </div>
                        <div class="space-y-1 text-sm ${isPast ? 'text-gray-500' : 'text-gray-600'}">
                            <div class="flex items-center">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"></path>
                                </svg>
                                ${scheduleDate.toLocaleDateString('ja-JP')} ${schedule.time}
                            </div>
                            <div class="flex items-center">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                ${schedule.location}
                            </div>
                        </div>
                        <p class="text-sm ${isPast ? 'text-gray-500' : 'text-gray-600'} mt-2">${schedule.description}</p>
                    </div>
                </div>
            `;
            
            scheduleContainer.appendChild(scheduleCard);
        });
    }

    static addSchedule(scheduleData) {
        const newSchedule = {
            id: `schedule_${Date.now()}`,
            date: scheduleData.date,
            title: scheduleData.title,
            description: scheduleData.description,
            time: scheduleData.time,
            location: scheduleData.location
        };
        
        schedules.push(newSchedule);
        localStorage.setItem('schedules', JSON.stringify(schedules));
        ScheduleManager.displaySchedules();
        UIManager.showNotification('新しい予定が追加されました', 'success');
    }
}

// UI管理クラス
class UIManager {
    static showMemberDetail(member) {
        modalTitle.textContent = `${member.name}さんのプロフィール`;
        modalContent.innerHTML = `
            <div class="text-center mb-6">
                <img src="${member.photoUrl}" alt="${member.name}さんの写真" 
                     class="w-32 h-32 object-cover rounded-full mx-auto border-4 border-pink-200 shadow-lg mb-4"
                     onerror="this.src='data:image/svg+xml;base64,${btoa(`
                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="128" height="128" fill="#F3F4F6"/>
                            <circle cx="64" cy="45" r="20" fill="#9B9BA3"/>
                            <path d="M20 108C20 88.1177 36.1177 72 56 72H72C91.8823 72 108 88.1177 108 108V128H20V108Z" fill="#9B9BA3"/>
                        </svg>
                     `)}';">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">${member.name}</h3>
                <p class="text-pink-600 font-semibold text-lg">${member.position}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-800 mb-2">家族構成</h4>
                <p class="text-gray-600">${member.familyInfo}</p>
            </div>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    static showReportDetail(report) {
        modalTitle.textContent = report.title;
        modalContent.innerHTML = `
            <div class="mb-4">
                <div class="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"></path>
                        </svg>
                        ${new Date(report.date).toLocaleDateString('ja-JP')}
                    </span>
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        ${report.author}
                    </span>
                </div>
            </div>
            <div class="prose max-w-none">
                <div class="whitespace-pre-line text-gray-700 leading-relaxed">${report.content}</div>
            </div>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    static closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    static showNotification(message, type = 'success') {
        notificationMessage.textContent = message;
        
        const notificationDiv = notification.querySelector('div');
        const icon = notification.querySelector('svg');
        
        if (type === 'success') {
            notificationDiv.className = 'bg-white border-l-4 border-green-500 rounded-lg shadow-lg p-4 max-w-sm';
            icon.className = 'w-5 h-5 text-green-500';
        } else if (type === 'error') {
            notificationDiv.className = 'bg-white border-l-4 border-red-500 rounded-lg shadow-lg p-4 max-w-sm';
            icon.className = 'w-5 h-5 text-red-500';
        }
        
        notification.classList.remove('hidden');
        
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }

    static showAddReportForm() {
        modalTitle.textContent = '新しい活動報告を追加';
        modalContent.innerHTML = `
            <form id="addReportForm" class="space-y-4">
                <div>
                    <label for="reportTitle" class="block text-sm font-medium text-gray-700 mb-2">タイトル</label>
                    <input type="text" id="reportTitle" name="title" required 
                           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                </div>
                
                <div>
                    <label for="reportDate" class="block text-sm font-medium text-gray-700 mb-2">日付</label>
                    <input type="date" id="reportDate" name="date" required 
                           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                </div>
                
                <div>
                    <label for="reportAuthor" class="block text-sm font-medium text-gray-700 mb-2">報告者</label>
                    <select id="reportAuthor" name="author" required 
                            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">選択してください</option>
                        ${members.map(member => `<option value="${member.name}">${member.name}</option>`).join('')}
                    </select>
                </div>
                
                <div>
                    <label for="reportContent" class="block text-sm font-medium text-gray-700 mb-2">内容</label>
                    <textarea id="reportContent" name="content" rows="8" required 
                              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="活動報告の詳細内容を入力してください..."></textarea>
                </div>
                
                <div class="flex justify-end space-x-3 pt-4">
                    <button type="button" id="cancelAddReport" 
                            class="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">
                        キャンセル
                    </button>
                    <button type="submit" 
                            class="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                        追加
                    </button>
                </div>
            </form>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // 今日の日付をデフォルトに設定
        document.getElementById('reportDate').value = new Date().toISOString().split('T')[0];
        
        // フォームイベントリスナー
        document.getElementById('addReportForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const reportData = Object.fromEntries(formData);
            ReportManager.addReport(reportData);
            UIManager.closeModal();
        });
        
        document.getElementById('cancelAddReport').addEventListener('click', () => {
            UIManager.closeModal();
        });
    }

    static showAddScheduleForm() {
        modalTitle.textContent = '新しい予定を追加';
        modalContent.innerHTML = `
            <form id="addScheduleForm" class="space-y-4">
                <div>
                    <label for="scheduleTitle" class="block text-sm font-medium text-gray-700 mb-2">タイトル</label>
                    <input type="text" id="scheduleTitle" name="title" required 
                           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                
                <div>
                    <label for="scheduleDate" class="block text-sm font-medium text-gray-700 mb-2">日付</label>
                    <input type="date" id="scheduleDate" name="date" required 
                           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                
                <div>
                    <label for="scheduleTime" class="block text-sm font-medium text-gray-700 mb-2">時間</label>
                    <input type="text" id="scheduleTime" name="time" required 
                           placeholder="例: 14:00-15:30"
                           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                
                <div>
                    <label for="scheduleLocation" class="block text-sm font-medium text-gray-700 mb-2">場所</label>
                    <input type="text" id="scheduleLocation" name="location" required 
                           placeholder="例: 会議室A、オンライン"
                           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                
                <div>
                    <label for="scheduleDescription" class="block text-sm font-medium text-gray-700 mb-2">説明</label>
                    <textarea id="scheduleDescription" name="description" rows="4" required 
                              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="予定の詳細説明を入力してください..."></textarea>
                </div>
                
                <div class="flex justify-end space-x-3 pt-4">
                    <button type="button" id="cancelAddSchedule" 
                            class="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">
                        キャンセル
                    </button>
                    <button type="submit" 
                            class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        追加
                    </button>
                </div>
            </form>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // フォームイベントリスナー
        document.getElementById('addScheduleForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const scheduleData = Object.fromEntries(formData);
            ScheduleManager.addSchedule(scheduleData);
            UIManager.closeModal();
        });
        
        document.getElementById('cancelAddSchedule').addEventListener('click', () => {
            UIManager.closeModal();
        });
    }

    static toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
        if (!mobileMenu.classList.contains('hidden')) {
            setTimeout(() => {
                mobileMenuPanel.style.transform = 'translateX(0)';
            }, 10);
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenuPanel.style.transform = 'translateX(100%)';
            document.body.style.overflow = 'auto';
        }
    }

    static closeMobileMenu() {
        mobileMenuPanel.style.transform = 'translateX(100%)';
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
        document.body.style.overflow = 'auto';
    }
}

// ナビゲーション管理クラス
class NavigationManager {
    static init() {
        // スムーズスクロール
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // モバイルメニューが開いている場合は閉じる
                    if (!mobileMenu.classList.contains('hidden')) {
                        UIManager.closeMobileMenu();
                    }
                }
            });
        });

        // アクティブセクションのハイライト
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('text-pink-500', 'font-semibold');
                        link.classList.add('text-gray-700');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.remove('text-gray-700');
                            link.classList.add('text-pink-500', 'font-semibold');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// データ永続化管理クラス
class DataManager {
    static loadData() {
        // ローカルストレージからデータを読み込み
        const savedReports = localStorage.getItem('reports');
        if (savedReports) {
            const parsedReports = JSON.parse(savedReports);
            reports.splice(0, reports.length, ...parsedReports);
        }

        const savedSchedules = localStorage.getItem('schedules');
        if (savedSchedules) {
            const parsedSchedules = JSON.parse(savedSchedules);
            schedules.splice(0, schedules.length, ...parsedSchedules);
        }
    }

    static saveData() {
        // ローカルストレージにデータを保存
        localStorage.setItem('reports', JSON.stringify(reports));
        localStorage.setItem('schedules', JSON.stringify(schedules));
    }
}

// アプリケーション初期化
class App {
    static async init() {
        try {
            // データ読み込み
            DataManager.loadData();
            
            // 各セクションの表示
            MemberManager.displayMembers();
            ReportManager.displayReports();
            ScheduleManager.displaySchedules();
            
            // ナビゲーション初期化
            NavigationManager.init();
            
            // イベントリスナーの設定
            App.setupEventListeners();
            
            console.log('ママさん会アプリケーションが正常に初期化されました');
        } catch (error) {
            console.error('アプリケーション初期化エラー:', error);
            UIManager.showNotification('アプリケーションの初期化に失敗しました', 'error');
        }
    }

    static setupEventListeners() {
        // モーダル関連
        closeModal?.addEventListener('click', UIManager.closeModal);
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                UIManager.closeModal();
            }
        });

        // ESCキーでモーダルを閉じる
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                UIManager.closeModal();
            }
        });

        // 活動報告追加ボタン
        addReportBtn?.addEventListener('click', UIManager.showAddReportForm);

        // 予定追加ボタン
        addScheduleBtn?.addEventListener('click', UIManager.showAddScheduleForm);

        // モバイルメニュー
        menuToggle?.addEventListener('click', UIManager.toggleMobileMenu);
        closeMobileMenu?.addEventListener('click', UIManager.closeMobileMenu);
        mobileMenu?.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                UIManager.closeMobileMenu();
            }
        });

        // ページ離脱時にデータを保存
        window.addEventListener('beforeunload', DataManager.saveData);
    }
}

// DOMContentLoaded時にアプリケーションを初期化
document.addEventListener('DOMContentLoaded', App.init);
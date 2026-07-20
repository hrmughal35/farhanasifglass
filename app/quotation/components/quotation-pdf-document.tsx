import { Document, Page, View, Text, Image, StyleSheet, Font } from "@react-pdf/renderer";
import type { Quotation } from "../../lib/quotations/types";
import { CURRENCY_SYMBOLS } from "../../lib/quotations/types";
import { calculateTotals, formatMoney } from "../../lib/quotations/calculations";

Font.register({
  family: "Helvetica-Bold",
  fonts: [],
});

const NAVY = "#0a1628";
const NAVY_LIGHT = "#132436";
const GOLD = "#c9a24b";
const GOLD_LIGHT = "#e4c876";
const TEAL = "#2fb8a6";
const INK = "#1c2733";
const MUTED = "#6b7785";
const ROW_ALT = "#f4f6f8";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: INK,
    paddingBottom: 46,
  },
  headerBand: {
    backgroundColor: NAVY,
    paddingTop: 26,
    paddingBottom: 22,
    paddingHorizontal: 34,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 46,
    height: 46,
  },
  companyName: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.5,
  },
  companySub: {
    color: TEAL,
    fontSize: 7.5,
    marginTop: 2,
    letterSpacing: 0.5,
  },
  headerRight: {
    alignItems: "flex-end",
  },
  quoteLabel: {
    color: GOLD_LIGHT,
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 2,
  },
  headerContactLine: {
    color: "#cfd8e3",
    fontSize: 8,
    marginTop: 3,
  },
  metaBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1.4,
    borderBottomColor: GOLD,
    paddingHorizontal: 34,
    paddingVertical: 10,
  },
  metaBlock: {
    flex: 1,
  },
  metaLabel: {
    color: MUTED,
    fontSize: 7,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  metaValue: {
    color: NAVY,
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
  },
  body: {
    paddingHorizontal: 34,
    paddingTop: 16,
  },
  clientCard: {
    backgroundColor: ROW_ALT,
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    flexDirection: "row",
    borderLeftWidth: 3,
    borderLeftColor: TEAL,
  },
  clientCol: {
    flex: 1,
  },
  clientLabel: {
    color: MUTED,
    fontSize: 7,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: 3,
  },
  clientValue: {
    color: INK,
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
  },
  sectionTitle: {
    color: NAVY,
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  table: {
    borderRadius: 3,
    overflow: "hidden",
  },
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: NAVY,
    paddingVertical: 7,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e9ed",
  },
  tableRowAlt: {
    backgroundColor: ROW_ALT,
  },
  colIndex: { width: "6%", paddingLeft: 10, paddingRight: 4 },
  colDesc: { width: "44%", paddingRight: 6 },
  colSize: { width: "18%", paddingRight: 6 },
  colAmount: { width: "16%", paddingRight: 6, textAlign: "right" },
  colAmountWide: { width: "32%", paddingRight: 10, textAlign: "right" },
  thText: {
    color: "#ffffff",
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  tdText: {
    fontSize: 9,
    color: INK,
  },
  tdMuted: {
    fontSize: 8.5,
    color: MUTED,
  },
  tdAmount: {
    fontSize: 9.5,
    color: NAVY_LIGHT,
    fontFamily: "Helvetica-Bold",
  },
  totalsWrap: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  totalsBox: {
    width: "58%",
  },
  totalsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  totalsRowLabel: {
    fontSize: 9,
    color: MUTED,
  },
  totalsRowValue: {
    fontSize: 9,
    color: INK,
    fontFamily: "Helvetica-Bold",
  },
  totalsRowValueB: {
    fontSize: 9,
    color: TEAL,
    fontFamily: "Helvetica-Bold",
    marginLeft: 14,
  },
  grandTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: NAVY,
    borderRadius: 3,
    paddingVertical: 9,
    paddingHorizontal: 12,
    marginTop: 4,
  },
  grandTotalLabel: {
    color: GOLD_LIGHT,
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.6,
  },
  grandTotalValue: {
    color: "#ffffff",
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
  },
  grandTotalValueB: {
    color: TEAL,
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    marginLeft: 16,
  },
  notesSection: {
    marginTop: 20,
    paddingTop: 12,
    borderTopWidth: 0.6,
    borderTopColor: "#dde2e8",
  },
  notesLabel: {
    color: NAVY,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  notesText: {
    fontSize: 8.5,
    color: MUTED,
    lineHeight: 1.5,
  },
  signatureRow: {
    marginTop: 26,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  signatureBlock: {
    width: "45%",
  },
  signatureLine: {
    borderTopWidth: 1,
    borderTopColor: "#b9c1cb",
    marginBottom: 5,
    paddingTop: 5,
  },
  signatureName: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: NAVY,
  },
  signatureRole: {
    fontSize: 7.5,
    color: MUTED,
    marginTop: 1,
  },
  footerBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: GOLD,
    paddingVertical: 10,
    paddingHorizontal: 34,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 8,
    color: NAVY,
    fontFamily: "Helvetica-Bold",
  },
});

export type QuotationPdfDocumentProps = {
  quotation: Quotation;
  logoSrc: string | null;
};

const COMPANY_ADDRESS = "Frij Al Murar, Near Latifa Mosque, Deira, Dubai - U.A.E";
const COMPANY_PHONE = "+971 52 890 3210";
const COMPANY_EMAIL = "asif.farhanasif@yahoo.com";
const COMPANY_WEBSITE = "www.farhanasifaluminiumandglassllc.com";

function formatDate(iso: string): string {
  if (!iso) return "";
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function addDays(iso: string, days: number): string {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime()) || !days) return "";
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default function QuotationPdfDocument({ quotation, logoSrc }: QuotationPdfDocumentProps) {
  const totals = calculateTotals(quotation);
  const symbol = CURRENCY_SYMBOLS[quotation.currency];
  const isDual = quotation.priceMode === "dual";
  const validityDate = addDays(quotation.date, parseInt(quotation.validityDays || "0", 10));

  return (
    <Document title={`Quotation ${quotation.quotationNo}`} author="Farhan Asif Aluminium and Glass Fixing L.L.C.">
      <Page size="A4" style={styles.page}>
        <View style={styles.headerBand}>
          <View style={styles.headerLeft}>
            {logoSrc ? <Image src={logoSrc} style={styles.logo} /> : null}
            <View>
              <Text style={styles.companyName}>FARHAN ASIF ALUMINIUM{"\n"}AND GLASS FIXING L.L.C.</Text>
              <Text style={styles.companySub}>UAE  •  AFRICA</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.quoteLabel}>QUOTATION</Text>
            <Text style={styles.headerContactLine}>{COMPANY_PHONE}</Text>
            <Text style={styles.headerContactLine}>{COMPANY_EMAIL}</Text>
          </View>
        </View>

        <View style={styles.metaBar}>
          <View style={styles.metaBlock}>
            <Text style={styles.metaLabel}>Quotation No.</Text>
            <Text style={styles.metaValue}>{quotation.quotationNo}</Text>
          </View>
          <View style={styles.metaBlock}>
            <Text style={styles.metaLabel}>Date</Text>
            <Text style={styles.metaValue}>{formatDate(quotation.date)}</Text>
          </View>
          <View style={styles.metaBlock}>
            <Text style={styles.metaLabel}>Valid Until</Text>
            <Text style={styles.metaValue}>{validityDate || "—"}</Text>
          </View>
          <View style={styles.metaBlock}>
            <Text style={styles.metaLabel}>Currency</Text>
            <Text style={styles.metaValue}>{quotation.currency}</Text>
          </View>
        </View>

        <View style={styles.body}>
          {(quotation.clientName || quotation.clientPhone || quotation.clientLocation || quotation.projectRef) && (
            <View style={styles.clientCard}>
              <View style={styles.clientCol}>
                <Text style={styles.clientLabel}>Quotation For</Text>
                <Text style={styles.clientValue}>{quotation.clientName || "—"}</Text>
              </View>
              <View style={styles.clientCol}>
                <Text style={styles.clientLabel}>Contact</Text>
                <Text style={styles.clientValue}>{quotation.clientPhone || "—"}</Text>
              </View>
              <View style={styles.clientCol}>
                <Text style={styles.clientLabel}>Location</Text>
                <Text style={styles.clientValue}>{quotation.clientLocation || "—"}</Text>
              </View>
              <View style={styles.clientCol}>
                <Text style={styles.clientLabel}>Project Ref.</Text>
                <Text style={styles.clientValue}>{quotation.projectRef || "—"}</Text>
              </View>
            </View>
          )}

          <Text style={styles.sectionTitle}>Scope of Work</Text>
          <View style={styles.table}>
            <View style={styles.tableHeaderRow}>
              <View style={styles.colIndex}><Text style={styles.thText}>#</Text></View>
              <View style={styles.colDesc}><Text style={styles.thText}>Description / Scope of Work</Text></View>
              <View style={styles.colSize}><Text style={styles.thText}>Size (cm)</Text></View>
              {isDual ? (
                <>
                  <View style={styles.colAmount}><Text style={styles.thText}>{quotation.optionALabel}</Text></View>
                  <View style={styles.colAmount}><Text style={styles.thText}>{quotation.optionBLabel}</Text></View>
                </>
              ) : (
                <View style={styles.colAmountWide}><Text style={styles.thText}>Amount ({symbol})</Text></View>
              )}
            </View>

            {quotation.items.map((item, index) => (
              <View
                key={item.id}
                style={index % 2 === 1 ? { ...styles.tableRow, ...styles.tableRowAlt } : styles.tableRow}
                wrap={false}
              >
                <View style={styles.colIndex}><Text style={styles.tdText}>{index + 1}</Text></View>
                <View style={styles.colDesc}><Text style={styles.tdText}>{item.description || "—"}</Text></View>
                <View style={styles.colSize}><Text style={styles.tdMuted}>{item.size || "—"}</Text></View>
                {isDual ? (
                  <>
                    <View style={styles.colAmount}>
                      <Text style={styles.tdAmount}>{item.amount ? formatMoney(parseFloat(item.amount)) : "—"}</Text>
                    </View>
                    <View style={styles.colAmount}>
                      <Text style={styles.tdAmount}>{item.amountB ? formatMoney(parseFloat(item.amountB)) : "—"}</Text>
                    </View>
                  </>
                ) : (
                  <View style={styles.colAmountWide}>
                    <Text style={styles.tdAmount}>
                      {item.amount ? `${symbol} ${formatMoney(parseFloat(item.amount))}` : "—"}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>

          <View style={styles.totalsWrap}>
            <View style={styles.totalsBox}>
              <View style={styles.totalsRow}>
                <Text style={styles.totalsRowLabel}>Subtotal</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.totalsRowValue}>{symbol} {formatMoney(totals.subtotalA)}</Text>
                  {isDual && <Text style={styles.totalsRowValueB}>{symbol} {formatMoney(totals.subtotalB)}</Text>}
                </View>
              </View>

              {parseFloat(quotation.discount || "0") > 0 && (
                <View style={styles.totalsRow}>
                  <Text style={styles.totalsRowLabel}>
                    Discount {quotation.discountType === "percent" ? `(${quotation.discount}%)` : ""}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.totalsRowValue}>- {symbol} {formatMoney(totals.discountAmountA)}</Text>
                    {isDual && <Text style={styles.totalsRowValueB}>- {symbol} {formatMoney(totals.discountAmountB)}</Text>}
                  </View>
                </View>
              )}

              {quotation.taxEnabled && (
                <View style={styles.totalsRow}>
                  <Text style={styles.totalsRowLabel}>VAT ({quotation.taxPercent}%)</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.totalsRowValue}>{symbol} {formatMoney(totals.taxAmountA)}</Text>
                    {isDual && <Text style={styles.totalsRowValueB}>{symbol} {formatMoney(totals.taxAmountB)}</Text>}
                  </View>
                </View>
              )}

              <View style={styles.grandTotalRow}>
                <Text style={styles.grandTotalLabel}>GRAND TOTAL</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.grandTotalValue}>{symbol} {formatMoney(totals.grandTotalA)}</Text>
                  {isDual && <Text style={styles.grandTotalValueB}>{symbol} {formatMoney(totals.grandTotalB)}</Text>}
                </View>
              </View>
            </View>
          </View>

          {quotation.notes && (
            <View style={styles.notesSection}>
              <Text style={styles.notesLabel}>Terms & Notes</Text>
              <Text style={styles.notesText}>{quotation.notes}</Text>
            </View>
          )}

          <View style={styles.signatureRow}>
            <View style={styles.signatureBlock}>
              <Text style={styles.notesText}>{COMPANY_ADDRESS}</Text>
            </View>
            <View style={styles.signatureBlock}>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureName}>Farhan Asif</Text>
              <Text style={styles.signatureRole}>Managing Director — Authorized Signatory</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerBar}>
          <Text style={styles.footerText}>{COMPANY_WEBSITE}</Text>
          <Text style={styles.footerText}>{COMPANY_PHONE}</Text>
        </View>
      </Page>
    </Document>
  );
}
